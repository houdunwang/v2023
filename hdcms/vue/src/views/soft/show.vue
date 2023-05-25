<script setup lang="ts">
const { find, model } = useSoft()
const route = useRoute()

model.value = await find(+route.params.id)
const tabName = ref('comment')
</script>

<template>
  <main class="">
    <section class="bg-white p-5 rounded-md">
      <h1 class="flex justify-between items-center font-bold text-xl opacity-80">
        {{ model.title }}
        <div class="">
          <el-button type="primary" size="default" @click="">下载软件</el-button>
        </div>
      </h1>
    </section>
    <el-tabs v-model="tabName" type="card" tab-position="top" class="bg-white rounded-md opacity-90 px-5 mt-5 pt-5">
      <el-tab-pane label="软件介绍 " name="content">
        <section class="">
          <v-md-preview :text="model.content"></v-md-preview>
        </section>
      </el-tab-pane>
      <el-tab-pane label="问题讨论 " name="comment">
        <CommentList :sid="model.id" />
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<style lang="scss" scoped>
:deep(.github-markdown-body) {
  @apply px-0;
}
</style>
