import { http } from '@/plugins/axios'

interface ICaptcha {
  key: ''
  svg: ''
}
const captcha = ref<ICaptcha>()

export default () => {
  const getCaptcha = async () => {
    captcha.value = await http.request<ICaptcha>({
      url: 'captcha',
    })
  }
  return { captcha, getCaptcha }
}
