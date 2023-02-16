const { app, BrowserWindow } = require('electron')
const { createWindow } = require('./window')
const { createMenu } = require('./menu')
require('./contextmenu')

app.whenReady().then(() => {
  const win = createWindow()
  createMenu(win)
})

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length == 0 && process.platform == 'darwin') {
    createWindow()
  }
})
