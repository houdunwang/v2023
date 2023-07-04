<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
</script>

<template>
  <Suspense>
    <main>
      <Navbar />
      <RouterView />
    </main>
  </Suspense>
</template>

<style lang="scss"></style>
