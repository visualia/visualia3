# Get started

## Vitepress

There are several ways to get started with Vitepress and Visualia:

#### 🅐 Run Slackblitz in your browser

[Open the sample project in Stackblitz](https://stackblitz.com/github/visualia/visualia-vitepress) and start editing the project right in your browser.

#### 🅑 Use Github template

[Clone](https://github.com/visualia/visualia-vitepress/generate) the Github template project [visualia/visualia-vitepress](https://github.com/visualia/visualia-vitepress)

#### 🅒 Use the command line

Run the following commands:

```sh
npx degit visualia/visualia-vitepress
npm install
npm run dev
```

#### 🅓 Modify existing Vitepress installation

It is easy to modify Vitepress installation to support Visualia. First, install Visualia:

```bash
npm install visualia3
```

Then, edit `config.js` as follows to install Visualia Vue plugin and import the styles:

```js{4-5,10}
// ./docs/.vitepress/config.js

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
