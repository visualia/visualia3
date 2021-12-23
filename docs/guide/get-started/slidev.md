# Slidev and Visualia

### Setup

To use Visualia components and utility function with [Slidev](https://sli.dev/), you will need to add a `/setup/main.ts` configuration file:

```ts
// /setup/main.ts

import { defineAppSetup } from "@slidev/types";
import { Visualia } from "visualia3";
import "visualia3/style.css";

export default defineAppSetup(({ app }) => {
  app.use(Visualia);
});
```

To support reactive variables syntax, it is recommended to configure Slidev to support it by adding Vite config file `/vite.config.ts`:

```ts
// /vite.config.ts

import { defineConfig } from "vite";

export default defineConfig({
  slidev: {
    vue: {
      reactivityTransform: true,
    },
  },
});
```

You can now start editing `/slides.md` and add Visualia components and utilities there.

### Note on math expressions

Slidev has a built-in support for KaTex-based math expression, very similar to Visualia with one key difference: **Visualia's `<v-math>` component allows to use reactive variables inside math expressions** while Slidev math is just static.

Here is an example to illustrate the difference:

```html
<v-slider v-model="v.x" />

Visualia: <v-math>x = {{ v.x }}</v-math>

Slidev: $x = {{ v.x }}$
```

<v-slider v-model="v.x" />

Visualia: <v-math>x = {{ v.x }}</v-math>

Slidev: <v-math>x = v.x </v-math>
