<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => d.kind.includes('video'))
</script>

<template>
  <main class="bg-[#2c3e50] w-screen h-screen p-5 flex flex-col gap-5 py-10">
    <h2 class="text-gray-50 text-center text-sm opacity-70">参数设置</h2>
    <el-select v-model="config.deviceId" placeholder="选择摄像头" clearable filterable>
      <el-option
        v-for="item in cameras"
        :key="item.deviceId"
        :label="item.label"
        :value="item.deviceId"
        size="large"
      >
      </el-option>
    </el-select>

    <el-input v-model="config.borderWidth" placeholder="边框宽度" size="large" clearable></el-input>
    <el-input v-model="config.borderColor" placeholder="边框颜色" size="large" clearable></el-input>
    <a
      href="https://www.houdunren.com"
      target="_blank"
      class="text-center opacity-70 text-xs text-teal-100 hover:text-yellow-400"
      >晚八点向军大叔直播</a
    >
  </main>
</template>

<style lang="scss" scoped>
main {
}
</style>
