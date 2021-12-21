<script setup>
const y = $ref(20)
</script>

# Hello VitePress

<v-test>Hello y: {{ y }}</v-test>

<input type="range" v-model="y" />

```md
# Hello

<v-test>Hello y: {{ y }}</v-test>

<input type="range" v-model="y" />
```
