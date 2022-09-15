import Message from './Message'

const Conversation = ({ messages = [] }) => (
  <>
    {
      messages.map(message => (
        <Message
          key={message.id}
          text={message.text}
          from={message.from}
        />
      ))
    }
  </>
)

export default Conversation
