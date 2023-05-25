<script setup lang="ts">
import CommentItem from './commentItem.vue'

const { sid } = defineProps<{ sid: number }>()
const { collections, findAll, model, add } = useComment(sid)
await findAll()
</script>
<template>
  <main>
    <section>
      <CommentItem v-for="comment of collections" :key="comment.id" :comment="comment" />
    </section>
    <!-- 回复框 -->
    <section class="py-3">
      <HdMarkdownEditor v-model="model.content" />
      <el-button type="primary" size="default" @click="add" class="mt-3"> 保存提交 </el-button>
    </section>
  </main>
</template>
