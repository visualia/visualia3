# v-math

v-math displays mathematical expressions.

## Usage

Here are some simple math expressions:

```md
<v-math>a = \frac{1}{10}</v-math>
```

Lets assign <v-math>a</v-math> to a global variable `v.a` and use `<v-slider />` to control it.

```md
<v-math>a = \frac{ {{ v.a }} }{10} = {{ v.a / 10 }}</v-math>

<v-slider v-model="v.a" />
```

## Syntax reference

Here are some references and examples how to express math in LaTeX / KaTeX format:

https://katex.org/docs/supported.html
https://en.wikibooks.org/wiki/LaTeX/Mathematics

## Prior art

https://designstem.github.io/fachwerk/docs/#/f-math
https://visualia.github.io/visualia_original/#math
