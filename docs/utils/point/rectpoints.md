# rectpoints

A function that outputs an array of Points, based on `x y width height` arguments.

```ts
type Point = {
  x: number;
  y: number;
};

function rectpoints(
  x: number,
  y: number,
  width: number,
  height: number
): Point[];
```

## Usage

```md
`{{ rectpoints(10, 20, 30, 40)}}`
```

## Example

```md
<svg width="100" height="100">
  <circle
    v-for="point in rectpoints(10, 20, 30, 40)"
    :cx="point.x"
    :cy="point.y"
    r="2"
    fill="red"
  />
  <rect x="10" y="20" width="30" height="40" stroke="black" fill="none" />
</svg>
```
