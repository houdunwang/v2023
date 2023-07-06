import { dialog } from 'electron'
import fetch from 'node-fetch'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

export const downloadFile = async (url: string, localFile: string) => {
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) {
    dialog.showErrorBox('后盾人温馨提示', '图片下载失败')
    throw new Error(`unexpected response ${response.statusText}`)
  }
  await streamPipeline(response.body!, createWriteStream(localFile))
  return localFile
}
