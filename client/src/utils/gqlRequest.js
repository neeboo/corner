import { GraphQLClient } from 'graphql-request'

const client = (endpoint, token) =>
  new GraphQLClient(`${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

const gqlRequest = async (endpoint, query, variables, token) => {
  try {
    const result = await client(endpoint, token).request(query, variables)
    return result
  } catch (e) {
    const { response, data, request } = e
    return { err: { response, data, request } }
  }
}

export default gqlRequest
