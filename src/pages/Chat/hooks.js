import { useEffect, useState } from 'react'
import { gql } from 'graphql-request'
import { useMutation } from '@tanstack/react-query'
import { v4 as uuid } from 'uuid'

import { request } from '../../helpers/graphql'

const CREATE_CONVERSATION_MUTATION = gql`
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

const SEND_MESSAGE_MUTATION = gql`
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

const ERROR_MESSAGE = {
  id: uuid(),
  text: 'Sorry! Something went wrong.',
  from: 'ERROR',
}

const useConversation = () => {
  const [messages, setMessages] = useState([])

  const {
    mutate: createConversation,
    isLoading: creating,
    data: { createConversation: { conversation = {} } = {} } = {},
  } = useMutation(
    ['conversation'],
    async () => request(CREATE_CONVERSATION_MUTATION),
    {
      onSuccess: data => setMessages(data.createConversation.conversation.messages),
      onError: () => setMessages([ERROR_MESSAGE]),
    },
  )

  const {
    mutate: sendMessage,
    isLoading: sending,
  } = useMutation(
    ['message'],
    async variables => request(SEND_MESSAGE_MUTATION, variables),
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
      onError: () => setMessages([...messages, ERROR_MESSAGE]),
    },
  )

  useEffect(() => {
    createConversation()
  }, [createConversation])

  return {
    conversationId: conversation.id,
    loading: creating || sending,
    messages,
    sendMessage,
  }
}

export {
  useConversation,
}
