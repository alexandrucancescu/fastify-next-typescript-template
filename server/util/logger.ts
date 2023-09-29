import * as process from "process";

const prettyLog = {
	transport: {
		target: 'pino-pretty',
		options: {
			translateTime: 'HH:MM:ss Z',
			ignore: 'pid,hostname',
		},
	},
	level: "debug"
}

export const envToLogger = {
	development: prettyLog,
	test: prettyLog,
	production: true,
}


export default () => {
	return envToLogger[process.env.NODE_ENV ?? "production"] ?? true
}