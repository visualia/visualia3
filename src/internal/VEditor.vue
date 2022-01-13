<script setup lang="ts">
import { ref, computed } from "vue";
import VCompiler from "./VCompiler.vue";
import MarkdownIt from "markdown-it";

const { content: inputContent } = defineProps(["content"]);
const content = ref(inputContent);
const md = new MarkdownIt();
const outputContent = computed(() => md.render(content.value));
</script>
<template>
  <textarea
    v-model="content"
    class="font-mono whitespace-pre bg-gray-800 text-gray-100 p-4"
  />
  <VCompiler :content="outputContent" />
</template>
