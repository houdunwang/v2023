<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
</script>

<template>
  <Suspense>
    <main class="flex flex-col h-screen">
      <Navbar />
      <RouterView #default="{ Component }">
        <component :is="Component" class="flex-1" />
      </RouterView>
    </main>
  </Suspense>
</template>

<style lang="scss"></style>
