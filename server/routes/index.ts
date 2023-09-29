import {Static, Type} from "@sinclair/typebox";
import {FastifyInstance, RouteGenericInterface} from "fastify";

export default async function (fastify: FastifyInstance) {
   fastify.get<RequestType>("/message", options, async (req) => {
      return {
         message: `Hello ${req.query.name}!`
      };
   });
}

const options = {
   schema: {
      querystring: Type.Object({
			name: Type.String({minLength: 2}),
		}, {additionalProperties: false}),
      response: {},
   }
}

interface RequestType extends RouteGenericInterface {
   Querystring: Static<typeof options.schema.querystring>
}