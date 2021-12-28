# circlepath

A function that outputs a circle as SVG [path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) string, based on `x`, `y` and `r` arguments

```ts
function circlepath(x: number, y: number, r: number): string;
```

## Usage

```md
`{{ circlepath(50,50,25) }}`
```

## Example

```md
<svg width="100" height="100">
  <path :d="circlepath(30,50,25)" fill="none" stroke="red" />
  <circle cx="60" cy="50" r="25" fill="none" stroke="black" />
</svg>
```
