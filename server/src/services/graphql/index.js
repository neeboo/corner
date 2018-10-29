import { mergeSchemas } from 'graphql-tools'
import UserSchema from './User'

export default mergeSchemas({
  schemas: [UserSchema],
  resolvers: {}
})
