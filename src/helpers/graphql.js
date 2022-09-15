export const request = async (query, variables) => {
  const response = await fetch(
    import.meta.env.GRAPHQL_API_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  )

  const json = await response.json()
  return json.data
}
