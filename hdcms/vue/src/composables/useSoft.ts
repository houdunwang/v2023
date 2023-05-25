import { http } from '@/plugins/axios'
import router from '@/plugins/router'
import { ElMessageBox } from 'element-plus'

export default () => {
  const collections = ref<ApiPage<ModelSoft>>()
  const model = ref<Partial<ModelSoft>>({})

  const getAll = async (page = 1, row = 10) => {
    collections.value = await http.request({
      url: `soft?page=${page}&row=${row}`,
    })
  }

  const add = async () => {
    await http.request({
      url: `/soft`,
      method: 'POST',
      data: model.value,
    })
    router.push({ name: 'admin.soft' })
  }
  const update = async () => {
    await http.request({
      url: `/soft/${model.value.id}`,
      method: 'Patch',
      data: model.value,
    })
    router.push({ name: 'admin.soft' })
  }
  const del = async (id: number) => {
    await ElMessageBox.confirm('确定删除软件吗?')
    await http.request({
      url: `soft/${id}`,
      method: 'DELETE',
    })
    location.reload()
  }

  const find = async (id: number) => {
    return http.request<ModelSoft>({
      url: `soft/${id}`,
    })
  }
  return { getAll, collections, model, add, del, find, update }
}
