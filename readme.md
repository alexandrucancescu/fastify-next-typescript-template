## Project template for Next.js with fastify as server, using typescript

### Notice
Fastify requires a plugin to replace next default server. At the moment
this plugin, `@fastify/nextjs` does not work with **next** version **13.4**
or higher due to a minor bug. I created a fix for this at 
`alexadrucancescu/fastify-nextjs`, when they fix this bug  or accept
my merge request you can replace `alexandrucancescu/fastify-nextjs` with
`@fastify/nextjs`.

### ESM Modules
This template uses **ES modules** for imports instead of commonjs. I find it more
convenient because you can import **ES Modules** and **Commonjs** modules.
If you want to keep using **commonjs**:
 - Delete `"type": "module"` from **package.json**
 - Remove `ky` dependency as it is a pure ES module, and it won't work with commonjs `require`
 - Change `"module": "es2022"` to `"module": "commonjs"` in **tsconfig.json**
 - Replace `dirname(import.meta.url)` with `__dirname`
 - Rename **next.config.mjs** to **next.config.js** and replace `export default` with `module.exports = `

### If you want to use **ES modules**, which is the recommended way going forward for node, you do not need to change anything! 

### Typescript

I use two **tsconfig** files. One is for **next**
and one for the node backend code, which resides in
**src**. I added `"jsx": "preserve"` as IDEs don't know
how to handle two **tsconfig** files and will complain
about the usage of JSX in you next code, even it
this belongs to **next.tsconfig.json**

### Adding next.js pages

Whenever you add a new **.tsx** file to your page
you also need to let fastify know that the route of
the page should be handled by next. To add a route,
edit **src/plugins/next.ts** by adding:

```typescript
fastify.next("/new-page");
```
in the **after** callback.


### Other packages used in this template

 - **ajv-errors** used for custom errors on fastify schemas
 - **dotenv-flow** load multiple .env files
 - **@sinclair/typebox** write fastify schemas easier, while it also provides types for fastify **req.query**, **req.body** ...