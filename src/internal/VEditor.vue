<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import VCompiler from "./VCompiler.vue";
import MarkdownIt from "markdown-it";

const { content: inputContent } = defineProps(["content"]);
const content = ref(inputContent);
const md = new MarkdownIt({ linkify: true, html: true, breaks: true });
const outputContent = computed(() => md.render(content.value));
const editor = ref<HTMLTextAreaElement | null>(null);
onMounted(() => {
  if (editor?.value) {
    editor.value.onkeydown = function (e) {
      if (e.keyCode === 9) {
        const val = this.value;
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = val.substring(0, start) + "  " + val.substring(end);
        this.selectionStart = this.selectionEnd = start + 2;
        return false;
      }
    };
  }
});
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <textarea
      ref="editor"
      v-model="content"
      class="w-full font-mono text-sm whitespace-pre bg-gray-800 text-gray-100 p-4"
    />
    <div class="p-4">
      <VCompiler :content="outputContent" />
    </div>
  </div>
</template>
