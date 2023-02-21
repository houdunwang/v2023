const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  selectFilePreload: () => {
    return ipcRenderer.invoke('selectFileMain')
  },
  saveToFile: (value) => {
    ipcRenderer.send('saveFileMain', value)
  },
})
