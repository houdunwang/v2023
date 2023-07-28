export default () => {
  const setIgnoreMouseEvents = () => {
    const el = document.querySelector('#app')! as HTMLDivElement
    el.addEventListener('mouseenter', () => {
      window.api.setIgnoreMouseEvents(false)
      // console.log('禁止穿透')
    })

    document.body.addEventListener('mouseover', (event: MouseEvent) => {
      if (event.target == document.body) {
        // console.log('开启穿透')
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }
  return { setIgnoreMouseEvents }
}
