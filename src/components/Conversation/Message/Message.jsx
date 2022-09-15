import styles, { messageTheme } from './styles'

const Message = ({ text, from }) => (
  <div css={[styles.wrapper, messageTheme(from)]}>
    {text}
  </div>
)

export default Message
