<script setup lang="ts">
import { sidebar } from "../../docs2/config";
</script>
<template>
  <nav class="leading-8 text-gray-600">
    <ul v-for="link in sidebar">
      <li>
        <router-link
          v-if="link.link && !link.children"
          :to="link.link"
          class="font-medium"
          active-class="text-sky-600 underline underline-offset-2"
        >
          {{ link.text }}
        </router-link>
        <div v-if="!link.link" class="font-bold">{{ link.text }}</div>
        <ul v-if="link.children" class="pl-4">
          <li v-for="child in link.children">
            <router-link
              :to="child.link"
              active-class="text-sky-600 underline underline-offset-2"
            >
              {{ child.text }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
