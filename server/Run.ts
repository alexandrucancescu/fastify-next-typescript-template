import { config } from 'dotenv-flow'
import Fastify from 'fastify'
import ajvErrors from 'ajv-errors'
import setupApp from './App.js'
import logger from './util/logger.js'

config()

const app = Fastify({
	trustProxy: true,
	logger: logger(),
	ajv: {
		plugins: [ajvErrors],
		customOptions: {
			allErrors: true,
		},
	},
})

async function run() {
	await setupApp(app)
	await app.listen({
		port: Number.parseInt(process.env.PORT) || 3000,
		host: 'localhost',
	})
	console.log(`Listening on ${process.env.PORT || 3000}`)
}

run().catch((err) => {
	console.error(err)
	process.exit()
})
