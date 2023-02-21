const { ipcMain, dialog } = require('electron')
const fs = require('fs')

ipcMain.handle('selectFileMain', async (event) => {
  const { filePaths } = await dialog.showOpenDialog({
    title: '选择图片文件',
    properties: ['openFile', 'multiSelections'],
    filters: [{ name: 'image', extensions: ['jpg', 'png'] }],
  })
  return filePaths
})

//保存文件
ipcMain.on('saveFileMain', async (event, content) => {
  const { filePath } = await dialog.showSaveDialog({
    title: '保存文件',
  })

  fs.writeFileSync(filePath, content)
})
