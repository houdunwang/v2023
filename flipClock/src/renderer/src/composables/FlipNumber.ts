import dayjs from 'dayjs'

export type OptionsType = {
  el: string
  type: 'clock' | 'timing'
  timing: Partial<Record<dayjs.ManipulateType, number>>
}

export default class FlipNumber {
  protected nums: number[] = []

  protected endTime: dayjs.Dayjs | undefined
  constructor(protected options: OptionsType) {
    this.options = Object.assign({ type: 'clock', style: 'hd' }, options)
  }
  init() {
    this.endTime = dayjs()
    if (this.options.type != 'clock') {
      Object.entries(this.options.timing).forEach(
        ([type, num]) => (this.endTime = this.endTime!.add(num, type as dayjs.ManipulateType))
      )
    }
  }
  //获取下一次的渲染数字
  getNextNum(index: number) {
    return this.options.type == 'clock'
      ? this.getClockNextNums(index)
      : this.getNextTimingNums(index)
  }

  getNums() {
    this.options.type == 'clock' ? this.getClockNums() : this.getTimingNums()
  }

  //倒计时的数字
  getTimingNums() {
    let hour = this.endTime!.diff(dayjs(), 'hour')
    let minute = this.endTime!.diff(dayjs().add(hour, 'hour'), 'minute')
    let second = this.endTime!.diff(dayjs().add(hour, 'hour').add(minute, 'minute'), 'second')

    const hourString = hour > 9 ? hour : '0' + hour
    const minuteString = minute > 9 ? minute : '0' + minute
    const secondString = second > 9 ? second : '0' + second

    //取数字的数量，有小时的时候取6位
    const len = hourString == '00' ? 4 : 6
    this.nums = (hourString + '' + minuteString + secondString)
      .substring(6 - len)
      .split('')
      .map((n) => +n)
  }

  //获取时间的数字
  getClockNums() {
    this.nums = dayjs()
      .format('HHmmss')
      .split('')
      .map((n) => +n)
  }

  //定时器数字
  getNextTimingNums(index: number) {
    const before = this.nums[index]
    let after = before - 1
    if (index % 2) {
      after = after < 0 ? 9 : after
    } else {
      after = after < 0 ? 5 : after
    }
    return { before, after }
  }

  //时间的数字
  getClockNextNums(index: number) {
    const before = this.nums[index]
    let after = before + 1
    if (index % 2) {
      after = after > 9 ? 0 : after
    } else {
      after = after > 6 ? 0 : after
    }
    return { before, after }
  }
}
