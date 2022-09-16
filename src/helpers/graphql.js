import { request as graphqlRequest } from 'graphql-request'

export const request = async (query, variables) => (
  graphqlRequest('/graphql', query, variables)
)
