<script setup>
  import { watch } from 'vue'
  import { BoxGeometry } from 'three'
  const mesh = $ref()
  const x = $ref(0)
  watch(() => x, () => {
    mesh.mesh.rotation.z = x / 360 * Math.PI;
    mesh.update();
  })
</script>

# v-three

```md
<script setup>
  import { watch } from 'vue'
  import { BoxGeometry } from 'three'
  const mesh = $ref()
  const x = $ref(0)
  watch(() => x, () => 
    mesh.mesh.rotation.z = x / 360 * Math.PI
    mesh.update();
  )
</script>

<v-slider v-model="x" step="any" max="360" />

<v-three>
  <v-three-group>
  <v-three-mesh ref="mesh" :geometry="new BoxGeometry(20, 20, 20)" />
  <v-three-path :path="circlepath(0,0,20)" />
  </v-three-group>
</v-three>
```
