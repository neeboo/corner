import restful from './restful'
import graphql from './graphql'

const router = app => {
  app.use('/restful', restful)
  app.use('/graphql', graphql)
  app.use((err, req, res) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({ err: 'invalid token...' })
    }
  })
}

export default router
