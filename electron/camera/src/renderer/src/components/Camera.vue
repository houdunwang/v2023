<script setup lang="ts">
import { onMounted } from 'vue'
// import useConfig from '@renderer/composables/useConfig'
// const { config } = useConfig()

import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
onMounted(() => {
  const constraints = {
    audio: false,
    video: { deviceId: config.deviceId, width: 1920, height: 1080 }
  } as MediaStreamConstraints
  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<template>
  <main
    class="w-screen h-screen overflow-hidden"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`"
  >
    <video class="object-cover h-full" :class="{ 'rounded-full': config.rounded }"></video>
  </main>
</template>

<style lang="scss"></style>
