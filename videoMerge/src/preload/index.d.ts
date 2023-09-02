import { IFile } from './../main/ipc'
import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      videoMerge: (files: IFile) => void
    }
  }
}
