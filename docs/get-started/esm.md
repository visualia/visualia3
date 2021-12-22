# ESM modules and Vite

The most bare-bones way to use Visualia is to import VueJS and Visualia into a single HTML file.

By using [ESM imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [import maps](https://github.com/WICG/import-maps) we can get the modular Javascript workflow in the browser without any tooling or build steps.

Visualia provides ESM-compatible CDN build in https://unpkg.com/visualia3/dist/visualia.js (and also in https://esm.sh/visualia3 and https://cdn.skypack.dev/visualia3).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/visualia3/dist/style.css" rel="stylesheet" />
    <style>
      body {
        margin: 0;
        padding: 1em;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js",
          "visualia": "https://unpkg.com/visualia3/dist/visualia.js",
          "marked": "https://unpkg.com/marked/lib/marked.esm.js"
        }
      }
    </script>
    <script type="module">
      import { createApp, ref } from "vue";
      import { Visualia } from "visualia";
      import { parse } from "marked";

      const App = {
        setup() {
          const x = ref(0);
          return { x };
        },
        template: parse(`
# Hello Visualia

## Local variable

<v-slider v-model="x" />

<v-math>x = {{ x }}</v-math>

## Global variable

<v-slider v-model="v.x" />

<v-math>x = {{ v.x }}</v-math>
        `),
      };

      const app = createApp(App);
      app.use(Visualia);
      app.mount("#app");
    </script>
  </body>
</html>
```
