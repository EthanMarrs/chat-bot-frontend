import Linkify from 'react-linkify'
import styles, { messageTheme } from './styles'

const Message = ({ text, from }) => (
  <div css={[styles.wrapper, messageTheme(from)]}>
    <Linkify>
      {text}
    </Linkify>
  </div>
)

export default Message
