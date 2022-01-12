<script setup lang="ts">
import { sidebar } from "../config";
</script>
<template>
  <ul v-for="link in sidebar">
    <li>
      <router-link v-if="link.link && !link.children" :to="link.link">{{
        link.text
      }}</router-link>
      <div v-if="!link.link">{{ link.text }}</div>
      <template v-if="link.children">
        <ul>
          <li v-for="child in link.children">
            <router-link :to="child.link">{{ child.text }}</router-link>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>
