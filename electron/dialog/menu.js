const { Menu, app, dialog, shell } = require('electron')

const template = [
  {
    label: app.name,
    submenu: [
      {
        label: '访问官网',
        click: async () => {
          const res = await dialog.showMessageBox({
            title: '后盾人',
            detail: '晚八点直播',
            buttons: ['取消', '确定'],
            cancelId: 0,
            checkboxLabel: '确定访问吗？',
            // checkboxChecked: true,
          })
          if (!res.checkboxChecked) {
            return dialog.showErrorBox('温馨提示', '你没有确认复选框')
          }
          if (res.response == 1) {
            shell.openExternal('https://www.houdunren.com')
          }
        },
      },
      {
        label: '退出',
        click: async () => {
          const res = await dialog.showMessageBox({
            title: '后盾人',
            detail: '你确定要退出吗？',
            buttons: ['取消', '确定'],
            cancelId: 0,
          })

          if (res.response == 1) app.quit()
        },
      },
    ],
  },
]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))
