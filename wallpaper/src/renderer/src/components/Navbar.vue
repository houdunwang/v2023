<script setup lang="ts">
import { Pic, SettingOne } from '@icon-park/vue-next'
</script>

<template>
  <main class="flex items-center justify-between px-3 py-2" id="navbar">
    <section class="text-sm opacity-70 text-gray-900">大叔桌面壁纸</section>
    <section class="flex items-center gap-2">
      <Pic theme="outline" class="icon" size="20" @click="$router.push({ name: 'home' })" />
      <setting-one
        theme="outline"
        class="icon"
        size="20"
        @click="$router.push({ name: 'setting' })"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.icon {
  @apply cursor-pointer text-gray-800 hover:text-orange-500;
}
</style>
