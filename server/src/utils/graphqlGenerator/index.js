import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { printSchema } from 'graphql/utilities/schemaPrinter'
import express from 'express'
import schema from '../../services/graphql'

const router = express.Router()

// /graphql/endpoint
router.use('/endpoint', graphqlExpress({ schema, context: {} }))

// /graphql/endpoint2
router.use('/endpoint2', graphiqlExpress({ endpointURL: '/graphql/endpoint' }))

// /graphql/schema
router.use('/schema', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send(printSchema(schema))
})

export default router
