# v-slider

`<v-slider />` is a component that changes a numeric variable with a slider. It is a lightweight wrapper around `<input type="range" />` HTML element.

## With global variable

```md
<v-slider v-model="v.x" />
```

Here we assign slider value to a global variable `v.x` where `v` is predefined but `x` can be any string as long it only contains letters, numbers or underscore. Global variables are available on each page so make sure you name your variables in a way that they do not conflict with each other.

To output the value you can use double curly braces `{{ }}`.

```md
> The value of x is {{ v.x }}
```

You can use that variable to control the SVG `<circle />` position on the page (or anything, really).

```md
<svg width="100" height="100">
  <circle :cx="v.x" cy="50" r="25" />
</svg>
```

## With local variable

If you want to use a local variable, only available in the current page, you will need to create a `<script setup>` section:

<script setup>
const x = $ref(0);
</script>

```md
<script setup>
const x = $ref(0);
</script>

<v-slider v-model="x" />

> The value of x is {{ x }}
```

## Setting attributes

Since `<v-slider />` is a lightweight wrapper around `<input type="range" />` so all the [input element attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range), including `min`, `max` and `step` also work.

```md
<svg width="100" height="100">
  <circle :cx="v.x2" cy="50" r="25" />
</svg>

<br />

<v-slider v-model="v.x2" step="50" />

> The value of x2 is {{ v.x2 }}
```

Note that step attribute can also be set to `step="any"` that makes slider to emit floating point value for those _smooooooth_ animations.

```md
<svg width="400" height="100">
  <circle :cx="v.x3" cy="50" r="25" />
</svg>

<br />

<v-slider v-model="v.x3" max="400" step="any" />

> The value of x3 is <br /> {{ v.x3 }}
```

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-slider
https://visualia.github.io/visualia_original/#live-variables_slider
