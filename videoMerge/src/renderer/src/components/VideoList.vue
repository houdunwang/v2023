<script setup lang="ts">
import { Plus, UpdateRotation, CloseOne } from '@icon-park/vue-next'
import { ElMessage, UploadRequestOptions } from 'element-plus'
import { ref } from 'vue'
const files = ref<string[]>([])
const httpRequest = (options: UploadRequestOptions) => {
  const file = options.file.path.split('/').pop()!
  const isExists = files.value.some((f) => f == file)
  if (isExists) {
    ElMessage.error(`${file}已存在`)
  } else files.value?.push(file)
}

const removeVideo = (index: number) => {
  files.value.splice(index, 1)
}
</script>

<template>
  <main class="">
    <section class="flex justify-center gap-6 mt-5">
      <el-upload action="#" multiple drag :show-file-list="false" :http-request="httpRequest">
        <plus theme="outline" size="48" class="text-gray-600" />
      </el-upload>

      <div
        class="w-20 h-20 bg-white flex justify-center items-center rounded-md border border-gray-200 cursor-pointer"
      >
        <update-rotation theme="outline" size="48" class="text-gray-600 animate-spin" />
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
          class="group bg-[#34495e] text-gray-300 opacity-80 py-1 px-3 my-2 rounded-md flex justify-between items-center hover:bg-white hover:text-[#2c3e50] hover:opacity-90 duration-300 cursor-pointer"
        >
          <div class="text-xs opacity-70">{{ file }}</div>

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
