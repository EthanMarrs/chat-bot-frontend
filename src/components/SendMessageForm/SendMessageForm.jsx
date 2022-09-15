import { useForm } from 'react-hook-form'

import send from '../../assets/send.svg'

import styles from './styles'

const SendMessageForm = () => {
  const {
    register, handleSubmit, formState: { isValid },
  } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register('message', { required: true })}
        css={styles.textarea}
        rows="1"
        name="message"
      />

      <button css={styles.button} type="submit">
        <img css={styles.image} src={send} alt="Send message" />
      </button>
    </form>
  )
}

export default SendMessageForm
