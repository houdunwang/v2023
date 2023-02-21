const { BrowserWindow, shell } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true,
    x: 1500,
    y: 100,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  })

  win.webContents.openDevTools()
  win.loadFile(path.resolve(__dirname, 'index.html'))

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  //var let const table  css3 js ->
}

module.exports = {
  createWindow,
}
