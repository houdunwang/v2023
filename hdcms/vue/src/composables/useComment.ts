import { http } from '@/plugins/axios'
import { ElMessageBox } from 'element-plus'

export default (sid: number) => {
  const collections = ref<CommentModel[]>([])
  const model = ref<Partial<CommentModel>>({})

  const findAll = async () => {
    collections.value = await http.request({
      url: `comment/${sid}`,
    })
  }

  const add = async (data: any) => {
    const comment = await http.request<CommentModel>({
      method: 'POST',
      url: `comment/${sid}`,
      data,
    })

    model.value.content = ''
    if (data.commentId) {
      collections.value.find((item) => item.id == data.commentId)?.replys.push(comment)
    } else {
      collections.value.push(comment)
    }
  }

  const del = async (id: number) => {
    await ElMessageBox.confirm('确定删除吗？')
    await http.request({
      url: `comment/${sid}/${id}`,
      method: 'DELETE',
    })

    const index = collections.value.findIndex((item) => item.id == id)
    collections.value.splice(index, 1)
  }

  return { findAll, add, del, collections, model }
}
