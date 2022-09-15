import Conversation from '../../components/Conversation'
import SendMesageForm from '../../components/SendMessageForm'

import styles from './styles'

const Chat = () => (
  <main css={styles.wrapper}>
    <Conversation />
    <SendMesageForm />
  </main>
)

export default Chat
