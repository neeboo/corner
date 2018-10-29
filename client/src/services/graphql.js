// import { request } from 'graphql-request'
import gqlRequest from '../utils/gqlRequest'
import { ENDPOINT } from '../utils/constant'

export const getAllUsers = async query => {
  const result = await gqlRequest(ENDPOINT, query)
  return result
}
//
// export async function updateOneTheme(mutation, variables) {
//   return await request(ENDPOINT, mutation, variables)
// }
//
// export async function createOneTheme(mutation, variables) {
//   return await request(ENDPOINT, mutation, variables)
// }
//
// export async function deleteOneTheme(mutation, variables) {
//   return await request(ENDPOINT, mutation, variables)
// }
