import { getUsers, getUser, hello } from '../../../resolvers'

const resolvers = {
  Query: {
    getUsers: () => getUsers(),
    getUser: (_, { id }) => getUser(id),
    hello: () => hello()
  }
}

export default resolvers
