const { contextBridge, ipcRenderer } = require('electron')
// shell.openExternal('https://houdunren.com')
// const fs = require('fs')
// fs.writeFileSync('a1.txt', 'abcc')
// contextBridge.exposeInMainWorld('api', {
//   toMain: () => {
//     ipcRenderer.send('mainEvent')
//   },
// })

// window.api = {
//   toMain: () => {
//     ipcRenderer.send('mainEvent')
//   },
// }

contextBridge.exposeInMainWorld('api', {
  changeWidthPosition: (options) => {
    ipcRenderer.send('setWindowPosition', options)
  },
})
