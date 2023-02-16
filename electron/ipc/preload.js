const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('api', {
//   hd: () => {
//     ipcRenderer.send('saveFile')
//   },
// })

// window.addEventListener('DOMContentLoaded', () => {
//   for (const app of ['chrome', 'electron', 'node']) {
//     const el = document.querySelector(`#${app}`)
//     el.innerHTML = `${app}:${process.versions[app]}`
//   }
// })

// contextBridge.exposeInMainWorld('api', {
//   counter: (callback) => {
//     ipcRenderer.on('test', (event, value) => {
//       callback(value)
//     })
//   },
// })

// contextBridge.exposeInMainWorld('api', {
//   hd: () => {
//     ipcRenderer.send('saveFile')
//   },
// })

// ipcRenderer.on('msg', (event, message) => {
//   console.log(message)
// })

// contextBridge.exposeInMainWorld('api', {
//   upload: async (callback) => {
//     const file = await ipcRenderer.invoke('selectFile')
//     callback(file)
//   },
// })

contextBridge.exposeInMainWorld('api', {
  changeTitle: (newTitle) => {
    ipcRenderer.send('updateTitle', newTitle)
  },
})
