// window.addEventListener('DOMContentLoaded', () => {
//   const btn = document.querySelector('button')
//   btn.addEventListener('click', () => {
//     window.api.toMain()
//   })
// })
// console.log(window.hd)

// const fs = require('fs')
// fs.writeFileSync('r.txt', 'renderer.js')

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button')
  btn.addEventListener('click', () => {
    const width = Number(document.querySelector('[name="width"]').value)
    const height = Number(document.querySelector('[name="height"]').value)
    window.api.changeWidthPosition({ width, height })
  })
})
