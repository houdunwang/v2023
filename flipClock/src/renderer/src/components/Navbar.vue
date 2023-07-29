<script setup lang="ts">
import { AlarmClock, Time } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const { config } = useConfigStore()

const toggle = () => {
  config.clock.type = config.clock.type == 'clock' ? 'timing' : 'clock'
  router.push({ name: 'clock' })
}
</script>

<template>
  <main
    class="py-1 nodrag rounded-md flex justify-between items-center gap-1"
    :style="{ color: config.footer.color }"
  >
    <div @click="toggle">
      <AlarmClock theme="outline" size="16" v-if="config.clock.type == 'timing'" />
      <Time theme="outline" size="16" v-else />
    </div>
    <!-- <span>切换 - {{ config.clock.type }}</span> -->
    <div class="flex gap-2 text-sm opacity-80">
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
