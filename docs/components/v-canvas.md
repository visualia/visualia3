<script setup>
import { v } from 'visualia3'
v.r = 0;
v.o = 0.5;
</script>

# v-canvas

<v-canvas>
  <v-canvas-path
    :path="circlepath(25,25,25)"
    :opacity="0.2"
  />
  <v-canvas-path
    :rotate="v.r"
    :path="linepath(rectpoints(25, 25, 75, 25), true)"
    :opacity="v.o"
  />
</v-canvas>

<br />

<v-slider max="180" v-model="v.r" />

> rotation: {{ v.r }}

<v-slider v-model="v.o" step="any" max="1" />

> opacity: {{ v.o }}
