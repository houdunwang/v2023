<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import VideoList from './components/VideoList.vue'
import VideoSelect from './components/VideoSelect.vue'
import useConfigStore from './store/useConfigStore'
const { config } = useConfigStore()
// import Versions from './components/Versions.vue'
//pinia
</script>

<template>
  <main class="">
    <Navbar />
    <section class="grid grid-cols-2 gap-3 p-3 bg-white">
      <VideoSelect v-model="config.preVideo">
        <template #tip>片头</template>
      </VideoSelect>
      <VideoSelect v-model="config.endVideo">
        <template #tip>片尾</template>
      </VideoSelect>
    </section>
    <section class="">
      <VideoList />
    </section>
    <section class="mt-3 text-gray-400 text-xs text-center opacity-80">
      向军大叔作品 <span class="text-yellow-500">晚八点直播</span>
    </section>
  </main>
</template>

<style lang="scss"></style>
