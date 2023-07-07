<script setup lang="ts">
import useWallpaper from '@renderer/composable/useWallpaper'
import { http } from '@renderer/plugins/axios'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ElLoading } from 'element-plus'
import { onMounted, ref } from 'vue'
const { setWallpaper, downloadImage } = useWallpaper()
const configStore = useConfigStore()
const img = ref<HTMLImageElement>()
const load = async () => {
  const res = await http.get('/')
  const loading = ElLoading.service({ background: 'rgba(255,255,255,.2)' })
  configStore.config.url = res.data
  img.value!.src = res.data
  img.value!.addEventListener('load', () => {
    loading.close()
  })
}
onMounted(() => {
  if (!configStore.config.url) load()
})
</script>

<template>
  <main class="">
    <img
      ref="img"
      :src="configStore.config.url"
      class="aspect-video nodrag cursor-pointer"
      @click="load"
      draggable="false"
    />
    <div
      class="cursor-pointer bg-white opacity-70 hover:opacity-100 text-center py-3 m-3 rounded-lg hover:bg-gray-300 hover:shadow-sm duration-500 nodrag"
      @click="setWallpaper"
    >
      设为壁纸
    </div>
    <div class="mx-3 text-xs text-gray-700 flex justify-between items-center">
      <div class="">大叔晚八点直播</div>
      <div class="hover:font-bold cursor-pointer text-sm nodrag" @click="downloadImage">
        下载壁纸
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
