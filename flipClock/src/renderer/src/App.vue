<script setup lang="ts">
import { Crown } from '@icon-park/vue-next'
import useMouseEvent from '@renderer/composables/useMouseEvent'
import FooterVue from '@renderer/components/footer.vue'

const { setIgnoreMouseEvents } = useMouseEvent()
setIgnoreMouseEvents()
</script>

<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <div class="bg-white"></div>
      <div class="">
        <div class="flex justify-center w-full mb-2 drag">
          <crown theme="outline" size="35" class="text-yellow-400" />
        </div>
        <component :is="Component" class="flex flex-col justify-center items-center" />
        <FooterVue />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less"></style>
