import { dialog, ipcMain } from 'electron'

ipcMain.handle('setImageDirectory', async () => {
  const res = await dialog.showOpenDialog({
    title: '选择图片保存目录',
    properties: ['createDirectory', 'openDirectory']
  })
  if (!res.canceled && res.filePaths.length) {
    return res.filePaths[0]
  }
  return undefined
})
