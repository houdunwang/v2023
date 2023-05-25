<script setup lang="ts">
import dayjs from 'dayjs'
const { comment } = defineProps<{ comment: CommentModel }>()
</script>

<template>
  <section class="mb-3 border rounded-md bg-white opacity-90">
    <div class="flex justify-between items-baseline p-3 border-b">
      <div class="flex gap-2">
        <img :src="comment.user.avatar" class="w-8 h-8 rounded-full" />
        <div class="flex flex-col text-xs">
          {{ comment.user.nickname }}
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <icon-time theme="outline" size="12" fill="#333" />
              {{ dayjs(comment.createAt).fromNow() }}
            </div>
            <div class="flex items-center cursor-pointer">
              <icon-share-two theme="outline" size="12" fill="#333" /> 回复
            </div>
          </div>
        </div>
      </div>
      <div class="flex cursor-pointer">
        <icon-delete theme="outline" size="12" fill="#333" />
      </div>
    </div>
    <div class="p-3">
      {{ comment.content }}
    </div>
  </section>
</template>

<style lang="scss"></style>
