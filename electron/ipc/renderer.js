// window.addEventListener('DOMContentLoaded', () => {
//   const btn = document.querySelector('#btn')
//   btn.addEventListener('click', () => {
//     window.api.hd()
//   })
// })

// const fs = require('fs')

// window.api.counter((value) => {
//   const el = document.querySelector('#counter')
//   el.innerHTML = Number(el.textContent) + value
// })

// window.addEventListener('DOMContentLoaded', () => {
//   const btn = document.querySelector('#btn')
//   btn.addEventListener('click', () => {
//     window.api.upload((file) => {
//       document.querySelector('input').value = file
//     })
//   })
// })

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    const title = document.querySelector('input').value
    window.api.changeTitle(title)
  })
})
