<script setup lang="ts">
import dayjs from 'dayjs'
const { authorize } = useAuth()
const { comment } = defineProps<{ comment: CommentModel }>()
const { model } = useComment(comment.softId)
model.value.commentId = comment.commentId || comment.id
const emit = defineEmits<{
  del: [id: number]
  add: [comment: CommentModel]
}>()

const showTextarea = ref(false)
</script>

<template>
  <section class="mb-3 border rounded-md bg-white opacity-90">
    <div class="flex justify-between items-baseline p-3 border-b">
      <div class="flex gap-2">
        <img :src="comment.user.avatar" class="w-8 h-8 rounded-full" />
        <div class="flex flex-col text-xs">
          {{ comment.user.nickname }} #{{ comment.id }}
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <icon-time theme="outline" size="12" fill="#333" />
              {{ dayjs(comment.createAt).fromNow() }}
            </div>
            <div class="flex items-center cursor-pointer" @click="showTextarea = !showTextarea">
              <icon-share-two theme="outline" size="12" fill="#333" /> 回复
            </div>
          </div>
        </div>
      </div>
      <div class="flex cursor-pointer" v-if="authorize(comment.id)">
        <icon-delete theme="outline" size="12" fill="#333" @click="$emit('del', comment.id)" />
      </div>
    </div>
    <div class="p-3">
      {{ comment.content }}
    </div>
    <div class="p-3" v-if="showTextarea">
      <el-input v-model="model.content" type="textarea" size="default" clearable></el-input>
      <el-button type="primary" size="small" @click="$emit('add', model)">回复</el-button>
    </div>
  </section>
</template>

<style lang="scss"></style>
