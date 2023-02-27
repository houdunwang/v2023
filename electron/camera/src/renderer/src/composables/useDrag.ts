class Drag {
  private pageX = 0
  private pageY = 0
  private body?: HTMLBodyElement
  constructor() {}
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }

  private mouseDown(e: MouseEvent) {
    this.pageX = e.pageX
    this.pageY = e.pageY
    const mouseMoveCallback = this.moveEvnet.bind(this)
    this.body?.addEventListener('mousemove', mouseMoveCallback)
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })

    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }
  private moveEvnet(e: MouseEvent) {
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY
    window.api.drag({ x, y })
  }
}
export default () => {
  const drag = new Drag()
  return { drag }
}
