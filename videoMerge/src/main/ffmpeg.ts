import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import ffprobePath from '@ffprobe-installer/ffprobe'
import ffmpeg from 'fluent-ffmpeg'
import { promisify } from 'util'
ffmpeg.setFfmpegPath(ffmpegPath.path)
ffmpeg.setFfprobePath(ffprobePath.path)

class VideoMerge {
  private ffmpeg: ffmpeg.FfmpegCommand
  private files: string[] = []
  private totalTime = 0

  constructor() {
    this.ffmpeg = ffmpeg()
  }

  videos(files: string[]) {
    this.files = files
    return this
  }

  private async getTotalTime() {
    const nums = await Promise.all(
      this.files.map(async (file) => {
        const {
          format: { duration }
        } = (await promisify(ffmpeg.ffprobe)(file)) as ffmpeg.FfprobeData
        return Number(duration)
      })
    )
    this.totalTime = nums.reduce((a, b) => (a += b), 0)
  }

  private videosAdd() {
    this.files.forEach((file) => this.ffmpeg.mergeAdd(file))
  }

  private progress(progress: any) {
    let runTotalTime = 0
    const times = progress.timemark.split(':') as number[]
    times.forEach((time, index) => {
      runTotalTime += Math.pow(60, 2 - index) * time
    })
    console.log((runTotalTime / this.totalTime) * 100)
  }
  async run() {
    await this.getTotalTime()

    this.videosAdd()
    this.ffmpeg
      .on('progress', this.progress.bind(this))
      .on('error', (err) => {
        // console.log(err)
      })
      .on('end', function () {
        // console.log('转换完成')
      })
      .mergeToFile(
        '/Users/hd/live/v2023/videoMerge/tmp/tmp.mp4',
        '/Users/hd/live/v2023/videoMerge/tmp'
      )
      .save('/Users/hd/live/v2023/videoMerge/b.mp4')
  }
}
const files = ['/Users/hd/live/v2023/videoMerge/a1.mp4', '/Users/hd/live/v2023/videoMerge/a2.mp4']

const instance = new VideoMerge()
instance.videos(files).run()
// ffmpeg()
//获取多个视频的总时长
// Promise.all(
//   files.map(async (file) => {
//     const {
//       format: { duration }
//     } = (await promisify(ffmpeg.ffprobe)(file)) as ffmpeg.FfprobeData
//     return Number(duration)
//   })
// )
//   .then((nums: number[]) => nums.reduce((a, b) => (a += b), 0))
//   .then((r) => {
//     console.log(r)
//   })
// promisify(ffmpeg.ffprobe)(a1).then((data) => {
//   console.log(data)
// })

// ffmpeg.ffprobe(a2, (_err, data) => {
//   console.log(data)
// })

//110
// ffmpeg()
//   .mergeAdd(a1)
//   .mergeAdd(a2)
//   .on('progress', function (progress) {
//     console.log('Processing: ' + progress.percent + '% done')
//   })
//   .on('error', (err) => {
//     console.log(err)
//   })
//   .on('end', function () {
//     console.log('转换完成')
//   })
// .mergeToFile('/Users/hd/live/v2023/videoMerge/tmp/tmp.mp4', '/Users/hd/live/v2023/videoMerge/tmp')
// .save('/Users/hd/live/v2023/videoMerge/b.mp4')
