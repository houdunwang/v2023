import { http } from '@/plugins/axios'

export default () => {
  const collections = ref<ApiPage<ModelSoft>>()
  const getAll = async (page = 1) => {
    collections.value = await http.request({
      url: `soft?page=${page}`,
    })
  }
  return { getAll, collections }
}
