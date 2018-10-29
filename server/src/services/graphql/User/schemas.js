export default `
# the schema allows the following query:
type Query {
  getUsers:[User]
  getUser(id:ID!):User
  hello:Hello
}

type User {
  id:String!
  name:String!
}

type Hello{
  hello:String!
}

`
