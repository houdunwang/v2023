<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipClock.scss'
onMounted(() => {
  const instance = new FlipClock({
    el: '#hd',
    type: 'clock'
    // timing: {
    // hour: 2,
    // minute: 8,
    // second: 10
    // }
  })
  instance.render()
})
</script>

<template>
  <main class="">
    <div id="hd"></div>
  </main>
</template>

<style lang="scss"></style>
