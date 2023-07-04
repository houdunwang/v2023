import { useConfigStore } from '@renderer/store/useConfigStore'

export default () => {
  const { config } = useConfigStore()
  const setWallpaper = () => {
    window.api.setWallpaper(config.url)
  }

  const downloadImage = () => {
    window.api.downloadImage(config.url)
  }
  return { setWallpaper, downloadImage }
}
