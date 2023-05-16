<script setup lang="ts">
import dayjs from 'dayjs'
const { user } = useUserStore()
</script>

<template>
  <main class="bg-white overflow-hidden rounded-md" v-if="user">
    <el-image :src="user.avatar" fit="cover" :lazy="true" class="w-full" />
    <div class="flex flex-col items-center justify-center py-3 text-slate-700">
      <h2 class="font-bold">{{ user.nickname }}</h2>
      <small class="text-sm">注册于{{ dayjs(user.created_at).fromNow() }}</small>
      <div class="text-xs mt-2 text-gray-600">ID:{{ user.id }}</div>
    </div>
  </main>
</template>
