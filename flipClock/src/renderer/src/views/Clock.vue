<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted, watch } from 'vue'
import '@renderer/assets/flipClock.scss'
import FooterVue from '@renderer/components/footer.vue'
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
</script>

<template>
  <main>
    <div
      id="hd"
      :style="{
        '--bgColor': config.clock.bgColor,
        '--color': config.clock.color
      }"
    ></div>
    <FooterVue />
  </main>
</template>

<style lang="scss">
:root {
  // --bgColor: red;
  // --width: 35px;
  // --color: #fff;
}
</style>
