import { BrowserWindow, ipcMain } from 'electron'

export default (win: BrowserWindow) => {
  ipcMain.handle('drag', (event, opt: { x: number; y: number }) => {
    const [x, y] = win.getPosition()
    win.setPosition(x + opt.x, y + opt.y)
    console.log(x, '--------------', y)
  })
}
