<script lang="ts" setup>
import Navbar from '@/components/navbar.vue'
import footerVue from './footer.vue'
</script>
<template>
  <main>
    <Navbar />
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" class="w-full 2xl:w-page mx-auto p-3 lg:mt-5" />
      </template>
    </RouterView>
    <footerVue />
  </main>
</template>
