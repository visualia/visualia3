# hsl

Ouputs a CSS color string in [hsl() notation](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl()>).

```js
export function hsl(h = 0, s = 100, l = 50, a = 1)
```

`@TODO props`

## Usage

The main use case for the function is to calculate dynamic color values in Vue components.

#### Usage in template, hue value

```md
Hover or tap over the colors to see how `h` value changes

<svg width="360" height="100">
  <rect v-for="h in range(0,360)" :x="h" y="0" width="1" height="100" :fill="hsl(h,100,50)" v-on:mouseover="v.h = h" />
</svg>

> `hsl({{ v.h ?? 0 }},100,50)`
```

#### Usage in template, saturation value

```md
Hover or tap over the colors to see how `s` value changes

<svg :width="100" height="100">
  <rect
    v-for="s in range(0,100)"
    :x="s"
    y="0"
    width="1"
    height="100"
    :fill="hsl(0,s,50)"
    v-on:mouseover="v.s = s"
  />
</svg>

> `hsl(0,{{ v.s ?? 0 }},50)`
```

#### Usage in template, lightness value

```md
Hover or tap over the colors to see how `l` value changes

<svg :width="100" height="100">
  <rect
    v-for="l in range(0,100)"
    :x="l"
    y="0"
    width="1"
    height="100"
    :fill="hsl(0,100,l)"
    v-on:mouseover="v.l = l"
  />
</svg>

> `hsl(0,100,{{ v.l ?? 0 }})`
```

#### Usage in template, alpha value

```md
Hover or tap over the colors to see how `a` value changes

<svg :width="100" height="100">
  <rect
    v-for="a in range(0,1,1/100)"
    :x="a * 100"
    y="0"
    width="1"
    height="100"
    :fill="hsl(0,100,50,a)"
    v-on:mouseover="v.a = a"
  />
</svg>

> `hsl(0,100,50,{{ v.a ?? 0 }})`
```

#### Usage in setup

`@TODO`

# hsla

`hsla()` is an alias to `hsl()`.
