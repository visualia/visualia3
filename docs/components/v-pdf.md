# Pdf

```md
<v-pdf>
  <v-pdf-path :path="linepath(rectpoints(10, 20, 30, 40), true)" />
  <v-pdf-path
    v-for="point in rectpoints(10, 20, 30, 40)"
    :path="circlepath(point.x, point.y, 5)"
  />
</v-pdf>
```
