<script setup>
  import { BoxGeometry } from 'three'
</script>

# v-three

```md
<script setup>
  import { BoxGeometry } from 'three'
</script>
<v-three :a="v.a">
  <v-three-mesh :geometry="new BoxGeometry(20, 20, 20)" />
  <v-three-path />
</v-three>
```
