<script setup>
  import { BoxGeometry } from 'three'
</script>

# v-three

```md
<script setup>
  import { BoxGeometry } from 'three'
</script>
<v-three>
  <v-three-group>
  <v-three-mesh :geometry="new BoxGeometry(20, 20, 20)" />
  <v-three-path :path="circlepath(0,0,20)" />
  </v-three-group>
</v-three>
```
