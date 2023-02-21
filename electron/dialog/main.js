const { app } = require('electron')
const { createWindow } = require('./window')
require('./menu')
require('./ipcMain')
app.whenReady().then(() => {
  createWindow()
})
