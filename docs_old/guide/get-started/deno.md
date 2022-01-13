# Deno and Visualia

For Deno, it is recommended to use Visualia's Typescript-based source files.

Create `index.ts` as follows:

```ts
// index.ts

import { hsl } from "https://unpkg.com/visualia3/src/utils/color.ts";
console.log(hsl(10));
```

Then run:

```bash
deno run index.ts
```
