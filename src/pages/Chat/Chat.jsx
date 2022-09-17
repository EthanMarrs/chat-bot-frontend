import Conversation from '../../components/Conversation'
import SendMesageForm from '../../components/SendMessageForm'
import Spinner from '../../components/Spinner'

import { useConversation } from './hooks'
import styles from './styles'

const Chat = () => {
  const {
    conversationId, loading, messages, sendMessage,
  } = useConversation()

  return (
    <main css={styles.wrapper}>
      <Conversation messages={messages} />

      {loading && <Spinner />}

      <SendMesageForm
        sendMessage={data => sendMessage({ sendMessageInput: { conversationId, ...data } })}
      />
    </main>
  )
}

export default Chat
