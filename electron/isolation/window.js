const { BrowserWindow, screen } = require('electron')
const path = require('path')
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1500,
    y: 100,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // contextIsolation: false,
      // nodeIntegration: true,
      // sandbox: false,
    },
  })
  mainWindow.webContents.openDevTools()

  mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
  // setTimeout(() => {
  //   const { width } = screen.getPrimaryDisplay().workAreaSize
  //   console.log(width)
  //   const x = width / 2 - 400
  //   mainWindow.setBounds({ width: 800, height: 200, x, y: 100 }, true)
  // }, 1000)
}

module.exports = { createWindow }
