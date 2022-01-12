<script setup lang="ts">
import { sidebar } from "../../docs2/config";
</script>
<template>
  <nav>
    <ul v-for="link in sidebar">
      <li>
        <router-link
          v-if="link.link && !link.children"
          :to="link.link"
          active-class="font-bold"
          >{{ link.text }}</router-link
        >
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
  </nav>
</template>
