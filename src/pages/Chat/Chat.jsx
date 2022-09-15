import { request, gql } from 'graphql-request'
import { useMutation } from 'react-query'
import { useEffect } from 'react'

import Conversation from '../../components/Conversation'
import SendMesageForm from '../../components/SendMessageForm'
import Spinner from '../../components/Spinner'

import styles from './styles'

const conversationMutation = gql`
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

const Chat = () => {
  const {
    mutate: createConversation,
    isLoading: creating,
    data: { createConversation: { conversation = {} } = {} } = {},
  } = useMutation(['conversation'], async () => request('/graphql', conversationMutation))

  useEffect(() => {
    createConversation()
  }, [createConversation])

  return (
    <main css={styles.wrapper}>
      {!creating && (
        <Conversation
          messages={conversation.messages}
        />
      )}

      {creating && (
        <Spinner />
      )}

      <SendMesageForm />
    </main>
  )
}

export default Chat
