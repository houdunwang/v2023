import { IpcMainEvent, ipcMain } from 'electron'
import ffmpeg from './ffmpeg'
export interface IFile {
  file: string
  preVideo?: string
  endVideo?: string
}
ipcMain.on('videoMerge', (event: IpcMainEvent, files: IFile) => {
  ffmpeg.run(files)
})
