import useConfigStore from '@renderer/store/useConfigStore'
import { ElMessage, UploadRequestOptions } from 'element-plus'
import { ref } from 'vue'
interface IVideo {
  name: string
  path: string
  process: number
}

export default () => {
  //配置项{片头，片尾}
  const { config } = useConfigStore()
  //文件列表
  const files = ref<IVideo[]>([])
  //是否正在合并
  const isRun = ref(false)
  //选择文件
  const httpRequest = (options: UploadRequestOptions) => {
    const filePath = options.file.path
    const fileName = filePath.split('/').pop()!
    const isExists = files.value.some((f) => f.path == filePath)
    if (isExists) {
      ElMessage.error(`${fileName}已存在`)
    } else files.value?.push({ path: filePath, name: fileName, process: 10 })
  }
  //删除视频
  const removeVideo = (index: number) => {
    files.value.splice(index, 1)
  }

  //执行合并
  const run = () => {
    if (!files.value.length) return ElMessage.error({ message: '请选择视频' })
    const video = files.value[0]
    window.api.videoMerge({
      file: video.path,
      preVideo: config.preVideo,
      endVideo: config.endVideo
    })
  }

  return { files, httpRequest, removeVideo, isRun, run }
}
