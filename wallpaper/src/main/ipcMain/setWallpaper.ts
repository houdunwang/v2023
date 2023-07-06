import { IpcMainEvent, dialog, ipcMain } from 'electron'
import { resolve } from 'path'
import wallpaper from 'wallpaper'
import { downloadFile } from '../uitl'
import fs from 'fs'
import { IpcMainInvokeEvent } from 'electron/main'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  try {
    const localFile = resolve(path, url.split('/').pop()!)
    const file = await downloadFile(url, localFile)

    wallpaper.set(file, { screen: 'all', scale: 'auto' })
  } catch (error) {
    // dialog.showErrorBox('', '图片下载失败，请在设置中心定义目录')
  }
})

ipcMain.handle('checkDirectory', async (_event: IpcMainInvokeEvent, path: string) => {
  return fs.existsSync(path)
})
