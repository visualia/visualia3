<script setup>
const y = $ref(20)
</script>

# Hello VitePress

<Test>Hello y: {{ y }}</Test>

<input type="range" v-model="y" />

```md
{{ y }}
```
