import send from '../../assets/send.svg'

import styles from './styles'

const SendMessageForm = () => (
  <form css={styles.form}>
    <textarea css={styles.textarea} rows="1" name="message" />

    <button css={styles.button} type="submit">
      <img css={styles.image} src={send} alt="Send message" />
    </button>
  </form>
)

export default SendMessageForm
