import next from "@fastify/nextjs";
import plugin from "fastify-plugin";
export default plugin(async (fastify) => {
    console.log(process.env.NODE_ENV);
    await fastify.register(next, {
        noServeAssets: false,
        dev: process.env.NODE_ENV === "development"
    });
    fastify.after(() => {
        //add next pages here
        fastify.next("/");
    });
});
//# sourceMappingURL=next.js.map