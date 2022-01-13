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
