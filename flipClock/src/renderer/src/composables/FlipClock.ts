import FlipNumber, { OptionsType } from './FlipNumber'

export default class FlipClock extends FlipNumber {
  private main: HTMLElement
  private divs: NodeListOf<HTMLDivElement>[] = []
  private intervalId: NodeJS.Timeout | undefined

  constructor(options: OptionsType) {
    super(options)
    this.main = document.querySelector(options.el)!
    this.main.classList.add('main')
    // this.addCssElement()
  }

  // addCssElement() {
  //   document.head.insertAdjacentHTML(
  //     'afterbegin',
  //     `
  //   <link rel="stylesheet" href="${this.options.style}.css" />
  //   `
  //   )
  // }
  render() {
    this.clock()
    this.intervalId = setInterval(() => {
      this.getNums()
      this.updateDivNumber()
      // console.log('runing........')
      if (this.nums.filter((n) => n > 0).length == 0) {
        clearInterval(this.intervalId)
      }
    }, 500)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  //执行div的渲染
  updateDivNumber() {
    this.divs.forEach((divs, index) => {
      const div = divs[1]
      const { before, after } = this.getNextNum(index)
      if (Number(div.dataset.before) !== before) {
        div.classList.add('flipDown')
      }
      div.addEventListener('animationend', () => {
        divs.forEach((div) => {
          div.dataset.before = String(before)
          div.dataset.after = String(after)
        })
        div.classList.remove('flipDown')
      })
    })
  }

  clock() {
    this.getNums()
    this.createSectionElement()
    this.getDivs()
  }

  getDivs() {
    this.divs = Array.from(this.main.querySelectorAll('section')).map((section) =>
      section.querySelectorAll('div')
    )
  }

  createSectionElement() {
    this.nums.forEach((_num, index) => {
      const { before, after } = this.getNextNum(index)
      this.main.insertAdjacentHTML(
        'beforeend',
        `
			<section>
				<div data-before="${before}" data-after="${after}"></div>
				<div data-before="${before}" data-after="${after}"></div>
			</section>
		`
      )
      if (index % 2 && index != this.nums.length - 1) {
        this.main.insertAdjacentHTML('beforeend', '<p></p>')
      }
    })
  }
}
