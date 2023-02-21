//选择文件
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#selectBtn')
  const container = document.querySelector('#container')
  btn.addEventListener('click', async () => {
    const files = await window.api.selectFilePreload()
    for (const file of files) {
      const input = document.createElement('input')
      input.value = file
      container.appendChild(input)
    }
  })
})

//保存文件
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#saveBtn')

  btn.addEventListener('click', async () => {
    const textarea = document.querySelector('[name="content"]')
    window.api.saveToFile(textarea.value)
  })
})
