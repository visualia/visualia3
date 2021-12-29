# Canvas

<v-canvas>
  <v-canvas-path :path="circlepath(v.x || 0, 20, 30)" :opacity="1" />
  <v-canvas-path :path="linepath(rectpoints(20, 30, 30, 40), true)" :opacity="0.1" :rotate="20" />
</v-canvas>

<br />

<v-slider v-model="v.x" />
