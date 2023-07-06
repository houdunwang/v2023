<script setup lang="ts">
import { Pic, SettingOne } from '@icon-park/vue-next'
</script>

<template>
  <main class="px-3 py-2 text-sm opacity-80 flex justify-between items-center drag">
    <section class="text-xs opacity-80">向军大叔桌面壁纸</section>
    <section class="flex items-center justify-center gap-2">
      <pic
        theme="outline"
        size="20"
        @click="$router.push({ name: 'home' })"
        class="cursor-pointer nodrag text-gray-500"
        :class="{ iconColor: $route.name == 'home' }"
      />
      <setting-one
        theme="outline"
        size="20"
        class="cursor-pointer nodrag text-gray-500"
        :class="{ iconColor: $route.name == 'setting' }"
        @click="$router.push({ name: 'setting' })"
      />
    </section>
  </main>
</template>

<style lang="scss">
.iconColor {
  color: #d35400 !important;
}
</style>
