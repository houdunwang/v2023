const { app, ipcMain, BrowserWindow, screen } = require('electron')
const { createWindow } = require('./window')

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('mainEvent', (event, value) => {
  console.log('333333333333')
})

//大哥-> window window
ipcMain.on('setWindowPosition', (event, options) => {
  // console.log(`main.js: ${options.width}`)
  //获取窗口
  const win = BrowserWindow.fromWebContents(event.sender)
  //
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const x = width / 2 - options.width / 2
  const y = height / 2 - options.height / 2
  // console.log(options.width, options.height)
  win.setBounds({ ...options, x, y }, true)
})
