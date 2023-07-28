<script setup lang="ts">
import { AlarmClock, Time } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()

const toggle = () => {
  config.clock.type = config.clock.type == 'clock' ? 'timing' : 'clock'
}
</script>

<template>
  <main
    class="bg-white mb-2 w-full py-1 rounded-md px-2 opacity-0 hover:opacity-100 flex justify-between"
  >
    <div @click="toggle">
      <AlarmClock theme="outline" size="20" fill="#333" v-if="config.clock.type == 'timing'" />
      <Time theme="outline" size="20" fill="#333" v-else />
    </div>
    <!-- <span>切换 - {{ config.clock.type }}</span> -->
    <div class="flex gap-1 text-sm opacity-80 text-gray-800">
      <RouterLink :to="{ name: 'config' }" v-if="$route.name == 'clock'">配置</RouterLink>
      <RouterLink :to="{ name: 'clock' }" v-else>时钟</RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
}
</style>
