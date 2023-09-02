<script setup lang="ts">
import { CloseOne, Plus, UpdateRotation } from '@icon-park/vue-next'
import useVideo from '@renderer/composables/useVideo'

const { files, httpRequest, removeVideo, isRun, run } = useVideo()
</script>

<template>
  <main class="">
    <section class="flex justify-center gap-6 mt-5">
      <el-upload action="#" multiple drag :show-file-list="false" :http-request="httpRequest">
        <plus theme="outline" size="48" class="text-gray-600" />
      </el-upload>

      <div
        class="w-20 h-20 bg-white flex justify-center items-center rounded-md border border-gray-200 cursor-pointer"
        @click="run"
      >
        <update-rotation
          theme="outline"
          size="48"
          class="text-gray-600"
          :class="{ 'animate-spin': isRun }"
        />
      </div>
    </section>
    <section class="text-center text-white my-3 text-xs opacity-40 font-light">
      准备转换 <span class="text-yellow-300 font-bold">{{ files.length }}</span> 个视频
    </section>
    <!-- 视频列表 -->
    <section
      class="bg-[#2c3e50] border mx-3 border-white border-opacity-20 px-3 rounded-lg overflow-y-auto h-80"
    >
      <div v-if="files.length">
        <div
          v-for="(file, index) of files"
          :key="index"
          class="group item bg-[#34495e] text-gray-300 opacity-80 py-1 px-3 my-2 rounded-md flex justify-between items-center hover:bg-white hover:text-[#2c3e50] hover:opacity-90 duration-300 cursor-pointer"
          :style="`--process:${file.process}%`"
        >
          <div class="text-xs opacity-70">{{ file.name }}</div>

          <close-one
            theme="outline"
            size="20"
            @click="removeVideo(index)"
            class="opacity-20 group-hover:opacity-100 duration-300"
          />
        </div>
      </div>
      <div
        v-else
        class="flex items-center justify-center h-80 text-white opacity-40 text-sm font-light"
      >
        转换完毕
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-upload-dragger) {
  @apply w-20 h-20 flex justify-center items-center;
}
.item {
  @apply relative overflow-hidden;
  &::before {
    content: '';
    @apply bg-green-700 absolute left-0 top-0 bottom-0;
    width: var(--process);
  }
}
// .run {
//   animation: rotate 2s both infinite linear;
// }
// @keyframes rotate {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
</style>
