---
---

<script setup>
const b = $ref(10)
const c = $computed(() => b * 100)
</script>

# hello

<v-slider v-model="b" />

{{ c }}
