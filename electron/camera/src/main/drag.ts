import { BrowserWindow, ipcMain } from 'electron'

ipcMain.handle('drag', (event, opt: { x: number; y: number }) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  const [x, y] = win.getPosition()
  win.setPosition(x + opt.x, y + opt.y)
})
