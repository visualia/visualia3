# Vitepress and Visualia

There are several ways to get started with Vitepress and Visualia:

### 🅐 Use Slackblitz

[Open Vitepress + Visualia sample project in Stackblitz](https://stackblitz.com/github/visualia/visualia-vitepress?file=docs%2Findex.md) and start editing the project right in the browser.

### 🅑 Use Github template

[Clone](https://github.com/visualia/visualia-vitepress/generate) the Github template project [visualia/visualia-vitepress](https://github.com/visualia/visualia-vitepress)

### 🅒 Use the command line

Run the following commands:

```bash
npx degit visualia/visualia-vitepress
npm install
npm run dev
```

### 🅓 Modify existing Vitepress installation

It is easy to modify Vitepress installation to support Visualia. First, install Visualia:

```bash
npm install visualia3
```

Then, edit `config.js` as follows to install Visualia plugin for Vue and import the Visualia styles:

```js{4-5,10}
// ./docs/.vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import { Visualia } from "visualia3";
import "visualia3/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
```

It is also recommended to support Vue's upcoming reactivity
transforms, an upcoming syntax for reactive variables.

Modify the `config.js` as follows:

```js{6}
// ./docs/.vitepress/config.js

import { defineConfig } from "vitepress";

export default defineConfig({
  vue: { reactivityTransform: true },
  // ...rest of the config...
});
```

:::info

Reactivity transforms are not _required_ to use Visualia, but a lot of documentation refers to this syntax.

:::

You can now start to use Visualia components, utility functions and state in your Markup documents.
