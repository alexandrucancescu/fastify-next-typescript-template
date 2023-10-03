/// <reference types="node" />
import type { FastifyInstance, FastifyServerOptions } from "fastify";
export default function (fastify: FastifyInstance, ignored?: FastifyServerOptions): Promise<FastifyInstance<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").FastifyBaseLogger, import("fastify").FastifyTypeProviderDefault>>;
export declare const options: {
    trustProxy: boolean;
};
//# sourceMappingURL=App.d.ts.map