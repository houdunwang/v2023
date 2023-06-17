<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'
import * as yup from 'yup'
import CommentItem from './commentItem.vue'

const { sid } = defineProps<{ sid: number }>()
const { collections, findAll, model, add, del } = useComment(sid)
await findAll()
const { exec, time } = useIntervalRequest(20, (data) => {
  return add(data)
})
// const schema = yup.object({
//   content: yup.string().required('内容不能为空').min(10, '最少输入10个字符'),
// })
</script>
<template>
  <main>
    <section>
      <div class="" v-for="comment of collections" :key="comment.id">
        <CommentItem :comment="comment" @del="del" @add="add" />
        <div class="ml-5">
          <CommentItem v-for="reply of comment.replys" :key="reply.id" :comment="reply" @del="del" @add="add" />
        </div>
      </div>
    </section>
    <!-- 回复框 -->
    <section class="py-3">
      <!-- <Form
        :validation-schema="schema"
        #default="{ handleSubmit }"
        :validate-on-mount="false"
        :key="collections.length"
      > -->
      <!-- <Field name="content" class="border" v-model="model.content" :validate-on-input="true"> -->
      <HdMarkdownEditor v-model="model.content" />
      <HdError name="content" />
      <!-- {{ time }} -->
      <!-- </Field> -->

      <!-- <ErrorMessage name="content" class="hd-error" as="div" /> -->
      <el-button type="primary" size="default" @click="exec(model)" class="mt-3"> 保存提交 </el-button>
      <!-- </Form> -->
    </section>
  </main>
</template>
