<script setup lang="ts">
import xjImg from '@/assets/xj.jpg'
import SoftItem from '@/components/SoftItem.vue'
const { getAll, collections } = useSoft()
await getAll(1, 100)
</script>

<template>
  <main>
    <section class="flex items-center justify-center flex-col">
      <img :src="xjImg" alt="向军大叔" class="rounded-full hidden lg:block md:w-60 md:h-60 object-cover" />
      <h1 class="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text mt-3">向军大叔作品</h1>
    </section>
    <section class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 gap-3 mt-6">
      <SoftItem v-for="soft of collections?.data" :soft="soft" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  @apply bg-gradient-to-r from-blue-500 to-red-500;
  background-size: 500%;
  animation: titleAnimate 5s ease infinite;
}
@keyframes titleAnimate {
  0%,
  100% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 50%;
  }
}
</style>
