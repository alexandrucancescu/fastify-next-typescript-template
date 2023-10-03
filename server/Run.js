import { config } from "dotenv-flow";
import Fastify from "fastify";
import ajvErrors from "ajv-errors";
import setupApp from "./App";
import logger from "./util/logger";
config();
const app = Fastify({
    trustProxy: true,
    logger: logger(),
    ajv: {
        plugins: [ajvErrors],
        customOptions: {
            allErrors: true
        }
    }
});
async function run() {
    await setupApp(app);
    await app.listen({
        port: Number.parseInt(process.env.PORT) || 3000,
        host: "0.0.0.0"
    });
}
run().catch(err => {
    console.error(err);
    process.exit();
});
//# sourceMappingURL=Run.js.map