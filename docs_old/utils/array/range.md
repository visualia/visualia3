# range

Generates an array of numbers between `from` and `to` with an optional `step` parameter. Inspired by Python's [range()](https://docs.python.org/3/library/stdtypes.html#range) function.

```ts
export function range(from: number, to: number, step: number = 1): number[];
```

## Usage

Generate array of numbers from `1` to `3`:

```md
`{{ range(1,3) }}`
```

Generate array of numbers from `1` to `3` with step of `0.5`:

```md
`{{ range(1,3,0.5) }}`
```

Generate array of numbers from `3` to `1`, in ascending order:

```md
`{{ range(3,1) }}`
```

## Advanced usage

`@TODO Array methods, including .map`

## Examples

`@TODO Visual examples`

## Prior art

https://designstem.github.io/fachwerk/docs/#/range
https://visualia.github.io/visualia_original/#helper-functions_range
