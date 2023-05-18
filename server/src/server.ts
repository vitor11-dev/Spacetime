import fastify from 'fastify'

const port = process.env.PORT as unknown

const app = fastify()
app
  .listen({
    port: port as number,
  })
  .then(() => {
    console.log('HTTP server run on http://localhost:3333')
  })
