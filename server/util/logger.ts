import * as process from 'node:process'
import pino from 'pino'

export default () => {
	const isProduction = process.env.NODE_ENV === 'production'

	return pino({
		level: process.env.LOG_LEVEL || 'debug',
		transport: isProduction
			? undefined
			: {
					target: 'pino-pretty',
					options: {
						translateTime: 'HH:MM:ss Z',
						ignore: 'pid,hostname',
					},
			  },
	})
}
