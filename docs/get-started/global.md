# Globals in HTML

For "classic" Javascript usage Visualia also provides a globally loadable UMD package https://unpkg.com/visualia3/dist/visualia.umd.js

This allows simply to open the local HTML file in the browser and start exploring Visualia.

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
    <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    <script src="https://unpkg.com/visualia3/dist/visualia.umd.js"></script>
    <script src="https://unpkg.com/marked/lib/marked.umd.js"></script>
    <script>
      const { createApp, ref } = Vue;
      const { Visualia } = visualia;
      const { parse } = marked;

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
