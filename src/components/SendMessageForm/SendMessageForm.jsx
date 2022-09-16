import { useForm } from 'react-hook-form'

import send from '../../assets/send.svg'

import styles from './styles'

const SendMessageForm = ({ sendMessage }) => {
  const {
    register, handleSubmit, reset, formState: { isValid },
  } = useForm({ mode: 'onChange' })

  const onSubmit = data => {
    sendMessage(data)
    reset()
  }

  return (
    <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('text', { required: true })}
        css={styles.input}
        placeholder="Type a message"
      />

      <button disabled={!isValid} css={styles.button} type="submit">
        <img css={styles.image} src={send} alt="Send message" />
      </button>
    </form>
  )
}

export default SendMessageForm
