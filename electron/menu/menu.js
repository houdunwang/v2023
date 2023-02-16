const { app, Menu, shell, BrowserWindow } = require('electron')
const isMac = process.platform == 'darwin'

const createMenu = (win) => {
  const config = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: '访问网站',
                accelerator: 'CommandOrControl+B',
                click: () => {
                  shell.openExternal('https://www.houdunren.com')
                },
              },
              {
                label: '渲染进程事件',
                click: () => {
                  win.webContents.send('toPreload', 'houdunren......')
                },
              },
            ],
          },
        ]
      : []),
    {
      label: '操作',
      submenu: [
        {
          label: '打开窗口',
          accelerator: 'CommandOrControl+A',
          click: () => {
            new BrowserWindow({
              width: 300,
              height: 300,
            })
          },
        },
        {
          label: '测试',
          click: () => {},
        },
        { type: 'separator' },
        {
          role: isMac ? 'close' : 'quit',
        },
      ],
    },
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(config))
}

module.exports = {
  createMenu,
}
