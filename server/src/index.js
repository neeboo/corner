import express from 'express'
// import url from 'url'
// import WebSocket from 'ws'
import app from './app'
import { httpType, serverPort } from '../devOps/serverType'
import { serverConfig, env } from '../devOps/serverConfig'
import { createServer } from './utils/createServer'

const hType = httpType()
const sPort = serverPort()

if (module.hot) {
  module.hot.accept(['./app'], () => {
    console.log('🔁  HMR Reloading `./app`...')
  })
  console.info('✅  Server-side HMR Enabled!')
} else {
  console.info('❌  Server-side HMR Not Supported.')
}
const server = express()

server.use((err, req, res) => app.handle(err, req, res))

createServer(serverConfig(hType, sPort), server)

// const wss = new WebSocket.Server({
//   port: 8080,
//   perMessageDeflate: {
//     zlibDeflateOptions: {
//       // See zlib defaults.
//       chunkSize: 1024,
//       memLevel: 7,
//       level: 3
//     },
//     zlibInflateOptions: {
//       chunkSize: 10 * 1024
//     },
//     // Other options settable:
//     clientNoContextTakeover: true, // Defaults to negotiated value.
//     serverNoContextTakeover: true, // Defaults to negotiated value.
//     clientMaxWindowBits: 10, // Defaults to negotiated value.
//     serverMaxWindowBits: 10, // Defaults to negotiated value.
//     // Below options specified as default values.
//     concurrencyLimit: 10, // Limits zlib concurrency for perf.
//     threshold: 1024 // Size (in bytes) below which messages
//     // should not be compressed.
//   }
// })
//
// wss.on('connection', (ws, req) => {
//   const location = url.parse(req.url, true)
//   // You might use location.query.access_token to authenticate or share sessions
//   // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
//
//   ws.on('message', message => {
//     console.log(`WS message ${message} from user ${req.session}`)
//   })
//   // ws.send('hello from server')
//
//   const stringsArray = ['1111', '2222', '3333', '4444', '5555', '6666', '7777']
//   for (let i = 0; i < stringsArray.length; i += 1) {
//     // setTimeout(() => ws.send(`${stringsArray[i]}`), i * 1000)
//     wss.clients.forEach(client => {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         // client.send(data);
//         setTimeout(() => client.send(`${stringsArray[i]}`), i * 1000)
//       }
//     })
//   }
// })

export default server
