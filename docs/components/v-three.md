<script setup>
  import { BoxGeometry } from 'three'
  //const path = $ref(null);
</script>

# v-three

<v-three :a="v.a">
  <v-three-mesh :geometry="new BoxGeometry(20, 20, 20)" />
  <v-three-path />
  <!-- <v-three-path ref="path" /> -->
</v-three>

<v-slider v-model="v.a" max="360" step="any" />