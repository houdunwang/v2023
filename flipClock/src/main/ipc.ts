import { BrowserWindow, IgnoreMouseEventsOptions, IpcMainEvent, ipcMain } from 'electron'

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: IgnoreMouseEventsOptions) => {
    // console.log(ignore, options)
    const win = BrowserWindow.fromWebContents(event.sender)
    win?.setIgnoreMouseEvents(ignore, options)
  }
)
