<script setup>
  import { watch } from 'vue'
  import { BoxGeometry } from 'three'
  const mesh = $ref()
  const x = $ref(0)
  watch(() => x, () => {
    mesh.mesh.rotation.y = x / 360 * Math.PI
    mesh.update();
  })
</script>

# v-three

```md
<v-slider v-model="x" step="any" max="360" />

<v-three>
  <v-three-group ref="mesh">
  <v-three-mesh :geometry="new BoxGeometry(20, 20, 20)" />
  <v-three-path :path="circlepath(0,0,20)" />
  </v-three-group>
</v-three>
```
