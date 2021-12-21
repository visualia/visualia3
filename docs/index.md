# Hello VitePress!

<v-test>Hello y: {{ v.y }}</v-test>

<input type="range" v-model="v.y" />

<v-slider v-model="v.y" />

```md
# Hello

<v-test>Hello y: {{ v.y }}</v-test>

<input type="range" v-model="v.y" />

<v-slider v-model="v.y" />
```

<script setup>
const y = $ref(20)
</script>

# Hello VitePress!

<v-test>Hello y: {{ y }}</v-test>

<input type="range" v-model="y" />

<v-slider v-model="y" />

```md
# Hello

<v-test>Hello y: {{ y }}</v-test>

<input type="range" v-model="y" />

<v-slider v-model="y" />
```
