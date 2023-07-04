import { IpcMainEvent, ipcMain } from 'electron'
import wallpaper from 'wallpaper'
import { downloadFile } from '../uitl'

ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string) => {
  const file = await downloadFile(url)

  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})
