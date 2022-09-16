import { useEffect, useState } from 'react'
import { gql } from 'graphql-request'
import { useMutation } from '@tanstack/react-query'
import { v4 as uuid } from 'uuid'

import Conversation from '../../components/Conversation'
import SendMesageForm from '../../components/SendMessageForm'
import Spinner from '../../components/Spinner'
import { request } from '../../helpers/graphql'

import styles from './styles'

const createConversationMutation = gql`
  mutation createConversation {
    createConversation(input: {}) {
      conversation {
        id
        messages {
          id
          text
          from
        }
      }
    }
  }
`

const sendMessageMutation = gql`
  mutation sendMessage($sendMessageInput: SendMessageInput!) {
    sendMessage(input: $sendMessageInput) {
      conversation {
        id
        messages {
          id
          text
          from
        }
      }
    }
  }
`

const Chat = () => {
  const [messages, setMessages] = useState([])

  const {
    mutate: createConversation,
    isLoading: creating,
    data: { createConversation: { conversation = {} } = {} } = {},
  } = useMutation(
    ['conversation'],
    async () => request(createConversationMutation),
    {
      onSuccess: data => setMessages(data.createConversation.conversation.messages),
    },
  )

  const {
    mutate: sendMessage,
    isLoading: sending,
  } = useMutation(
    ['message'],
    async variables => request(sendMessageMutation, variables),
    {
      onMutate: variables => {
        const newData = [
          ...messages,
          {
            id: uuid(),
            text: variables.sendMessageInput.text,
            from: 'USER',
          },
        ]

        setMessages(newData)
      },
      onSuccess: data => setMessages(data.sendMessage.conversation.messages),
    },
  )

  useEffect(() => {
    createConversation()
  }, [createConversation])

  return (
    <main css={styles.wrapper}>
      {!creating && (
        <Conversation messages={messages} />
      )}

      {(creating || sending) && (
        <Spinner />
      )}

      <SendMesageForm
        sendMessage={data => sendMessage({
          sendMessageInput: {
            conversationId: conversation.id,
            ...data,
          },
        })}
      />
    </main>
  )
}

export default Chat
