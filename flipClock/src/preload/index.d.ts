import { ElectronAPI } from '@electron-toolkit/preload'
import { IgnoreMouseEventsOptions } from 'electron'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions) => void
    }
  }
}
