import Autoload from "@fastify/autoload";
import { join } from "path";
import { dirname } from "desm";
const __dirname = dirname(import.meta.url);
export default async function (fastify, ignored) {
    fastify.register(Autoload, {
        dir: join(__dirname, 'plugins'),
    });
    fastify.register(Autoload, {
        dir: join(__dirname, 'routes')
    });
    return fastify;
}
export const options = {
    trustProxy: true
};
//# sourceMappingURL=App.js.map