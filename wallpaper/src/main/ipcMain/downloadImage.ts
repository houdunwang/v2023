import { IpcMainEvent, dialog, ipcMain } from 'electron'
import { downloadFile } from '../uitl'

ipcMain.on('downloadImage', async (_event: IpcMainEvent, url: string) => {
  const fileName = url.split('/').pop()!
  const res = await dialog.showSaveDialog({
    title: '下载图片',
    message: '向军大叔桌面软件',
    defaultPath: fileName,
    properties: ['createDirectory']
  })
  if (res.canceled === false && res.filePath) downloadFile(url, res.filePath)
})
