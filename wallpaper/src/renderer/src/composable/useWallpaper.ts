import router from '@renderer/router'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ElMessage } from 'element-plus'

export default () => {
  const { config } = useConfigStore()
  //设置壁纸
  const setWallpaper = async () => {
    const state = await window.api.checkDirectory(config.saveDirectory)
    if (!state) {
      ElMessage({ type: 'error', message: '图片保存目录无效' })
      return router.push({ name: 'setting' })
    }
    window.api.setWallpaper(config.url, config.saveDirectory)
  }

  const downloadImage = () => {
    window.api.downloadImage(config.url)
  }

  //设置图片壁纸保存目录
  const setImageSaveDirectory = async () => {
    const path = await window.api.setImageSaveDirectory()
    if (path) config.saveDirectory = path
  }

  return { setWallpaper, downloadImage, setImageSaveDirectory }
}
