import { IpcMainInvokeEvent, dialog, ipcMain } from 'electron'

ipcMain.handle('setImageDirectory', async (_event: IpcMainInvokeEvent) => {
  const res = await dialog.showOpenDialog({
    title: '选择图片保存目录',
    properties: ['createDirectory', 'openDirectory']
  })
  if (!res.canceled && res.filePaths.length) {
    return res.filePaths[0]
  }
})
