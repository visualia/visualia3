<script setup lang="ts">
//@ts-nocheck
import { inject, useSlots, watch } from "vue";
import type { Context } from "./VThree.vue";

const slots = useSlots();

const { update } = inject("context") as Context;

if (slots && slots.default) {
  watch(
    () => slots.default(),
    () => {
      update();
    },
    { immediate: true }
  );
}
</script>
<template>
  <slot />
</template>
