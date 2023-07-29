<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted, watch } from 'vue'
import '@renderer/assets/flipClock.scss'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const instance = new FlipClock({ el: '#hd', ...config.clock })
watch(
  () => config.clock.type,
  () => {
    instance
      .destroy()
      .config({ el: '#hd', ...config.clock })
      .render()
  }
)
onMounted(() => {
  instance.render()
})

//刷新倒计时
const refresh = () => {
  if (config.clock.type == 'clock') return
  instance
    .destroy()
    .config({ el: '#hd', ...config.clock })
    .render()
}
</script>

<template>
  <main>
    <div
      id="hd"
      @dblclick="refresh"
      :style="{
        '--bgColor': config.clock.bgColor,
        '--color': config.clock.color
      }"
    ></div>
  </main>
</template>

<style lang="scss">
:root {
  // --bgColor: red;
  // --width: 35px;
  // --color: #fff;
}
</style>
