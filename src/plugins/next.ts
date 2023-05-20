import next from "@fastify/nextjs";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
   console.log(process.env.NODE_ENV);
   await fastify.register(next, {
      noServeAssets: false,
      dev: process.env.NODE_ENV === "development"
   })

   fastify.after(() => {
      //add next pages here
      fastify.next("/");
   })
})