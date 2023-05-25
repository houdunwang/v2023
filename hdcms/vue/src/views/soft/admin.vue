<script setup lang="ts">
import SoftItem from '@/components/SoftItem.vue'
const { collections, getAll } = useSoft()
const route = useRoute()
await getAll(+(route.query.page || 1))
</script>

<template>
  <main class="">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
        <div class="flex justify-between items-center">
          软件管理
          <el-button type="primary" size="default" @click="$router.push({ name: 'soft.create' })">上架软件</el-button>
        </div>
      </template>
      <main v-if="collections" class="grid grid-cols-5 gap-2">
        <SoftItem v-for="soft of collections.data" class="border rounded-md" :soft="soft" :show-button="true" />
      </main>
    </el-card>
    <el-pagination
      class="bg-white p-2 mt-3 rounded-md"
      @current-change="$router.push({ name: 'admin.soft', query: { page: $event } })"
      :current-page="collections?.meta.page"
      :page-sizes="[20, 40, 80, 100]"
      :page-size="collections?.meta.row"
      :total="collections?.meta.total"
      background
    >
    </el-pagination>
  </main>
</template>
