<script setup lang="ts">
const { collections, getAll } = useSoft()
await getAll()
</script>

<template>
  <el-card shadow="always" :body-style="{ padding: '20px' }">
    <template #header>
      <div>软件管理</div>
    </template>
    <main v-if="collections" class="grid grid-cols-5 gap-2">
      <section v-for="soft of collections.data" class="border rounded-md">
        <img :src="soft.preview" :alt="soft.title" />
        <h2 class="text-center opacity-90 text-gray-900 py-3">{{ soft.title }}</h2>
        <div class="text-sm opacity-70 p-2 line-clamp-3 h-[70px]">
          {{ soft.description }}
        </div>

        <div class="flex justify-center py-3 border-t mt-3">
          <el-button type="success" plain size="small" @click="">编辑</el-button>
          <el-button type="danger" plain size="small" @click="" class="!ml-2">删除</el-button>
        </div>
      </section>
    </main>
  </el-card>
</template>

<style lang="scss"></style>
