import { useEffect, useState } from 'react'
import { gql } from 'graphql-request'
import { useQuery, useMutation } from '@tanstack/react-query'
import { v4 as uuid } from 'uuid'

import { request } from '../../helpers/graphql'

const CONVERSATION_QUERY = gql`
  query conversation($id: ID!) {
    conversation(id: $id) {
      id
      messages {
        id
        text
        from
      }
    }
  }
`

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

const useLocalStorage = key => {
  let item

  try {
    item = window.localStorage.getItem(key)
  } catch (error) {
    console.log(error)
  }

  const setitem = value => {
    window.localStorage.setItem(key, value)
  }

  return [item, setitem]
}

const useConversation = () => {
  const [conversationId, setConversationId] = useLocalStorage('conversationId')
  const [messages, setMessages] = useState([])

  const { isLoading: fetching, refetch: fetchConversation, status: fetchStatus } = useQuery(
    ['conversation', conversationId],
    async () => request(CONVERSATION_QUERY, { id: conversationId }),
    {
      enabled: false,
      onSuccess: data => setMessages(data.conversation.messages),
    },
  )

  const { mutate: createConversation, isLoading: creating } = useMutation(
    ['createConversation'],
    async () => request(CREATE_CONVERSATION_MUTATION),
    {
      onSuccess: data => {
        setMessages(data.createConversation.conversation.messages)
        setConversationId(data.createConversation.conversation.id)
      },
      onError: () => setMessages([ERROR_MESSAGE]),
    },
  )

  const { mutate: sendMessage, isLoading: sending } = useMutation(
    ['sendMessage'],
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
    if (conversationId && fetchStatus !== 'success') fetchConversation()
    if (!conversationId) createConversation()
  }, [conversationId, fetchStatus, fetchConversation, createConversation])

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [messages])

  return {
    conversationId,
    loading: creating || sending || fetching,
    messages,
    sendMessage,
  }
}

export {
  useConversation,
  useLocalStorage,
}
