<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main
    class="bg-[#8e44ad] w-full px-3 text-center mt-2 rounded-md text-white"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
  >
    晚八点直播，点个关注吧
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
  // color: white;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
</style>
