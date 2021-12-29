<script lang="ts" setup>
import {
  watch,
  ref,
  onMounted,
  defineProps,
  onBeforeUpdate,
  provide,
} from "vue";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";

import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const props = defineProps({ a: { type: Number, default: 1 } });

const el = ref(null);
const width = 100;
const height = 100;

const scene = new Scene();
const camera = new PerspectiveCamera(100, width / height, 0.1, 1000);
camera.position.z = width / 2.38;

//const renderer = new SVGRenderer();

const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(2);

renderer.setSize(width, height);

const update = () => renderer.render(scene, camera);

// watch(
//   () => props.a,
//   () => cube.rotateZ(props.a / 5000),
//   { immediate: true }
// );

//@ts-ignore
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", update);

onMounted(() => {
  //@ts-ignore
  el.value.append(renderer.domElement);
  update();
});

onBeforeUpdate(() => {
  update();
});

provide("context", { scene, update });
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
