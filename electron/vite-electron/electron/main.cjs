const { BrowserWindow, app } = require('electron')

const createWin = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    alwaysOnTop: true,
    x: 1000,
  })
  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
  createWin()
})
