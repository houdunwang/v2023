<script setup lang="ts">
import useConfigStore from '@renderer/store/useConfigStore'
// import Versions from './components/Versions.vue'
//pinia
const { config } = useConfigStore()
</script>

<template>
  <main class="">
    {{ config }}
  </main>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
