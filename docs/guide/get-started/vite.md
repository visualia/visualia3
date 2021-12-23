# Vite and Visualia

There are multiple ways to get started with Vite and Visualia:

### 🅐 Use Slackblitz

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/visualia/visualia-vite?file=src%2Findex.md)

Open Vite + Visualia project in Stackblitz and start editing the project right in the browser.

### 🅑 Use Github template

[Clone](https://github.com/visualia/visualia-vite/generate) the Github template project [visualia/visualia-vite](https://github.com/visualia/visualia-vite)

### 🅒 Use the command line

Run the following commands:

```bash
npx degit visualia/visualia-vite
cd visualia-vite
npm install
npm run dev
```

### 🅓 Use Vite installer and add Visualia

Your can also use the standard [Vite installer](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). Choose either `vue` or `vue-ts` project when setting up a project.

```bash
npm init vite@latest
```

Next, install Visualia and vite-plugin-md (for Markdown support)

```bash
npm install visualia3 vite-plugin-md
```

Next, add reactive variables shortcuts and Markdown support to Vite config.

```js{3,7-8}
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import markdown from "vite-plugin-md";

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true, include: [/\.vue$/, /\.md$/] }),
    markdown(),
  ],
});
```

Next, modify the `/src/main.js` as follows:

```js
import { createApp } from "vue";
import { Visualia } from "visualia3";
import "visualia3/style.css";
import "./style.css";

import index from "./index.md";

const app = createApp(index);
app.use(Visualia);
app.mount("#app");
```

Finally, add `/src/index.md` where you can use Markdown and Visualia syntax.

Note that `/src/App.vue` is no longer needed and can be removed.
