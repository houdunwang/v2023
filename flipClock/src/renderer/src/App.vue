<script setup lang="ts">
import useMouseEvent from '@renderer/composables/useMouseEvent'
import Navbar from '@renderer/components/Navbar.vue'
const { setIgnoreMouseEvents } = useMouseEvent()
setIgnoreMouseEvents()
</script>

<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <Navbar class="" />
      <div class="drag">
        <component :is="Component" class="flex flex-col justify-center items-center" />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
