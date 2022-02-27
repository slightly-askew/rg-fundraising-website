import fetch from 'node-fetch'
import { buildUrl } from 'cloudinary-build-url'

const IS_CLOUDINARY_URL = /^https:\/\/res\.cloudinary\.com/
const REGEX_FILENAME = /\/([^\/]+)$/gi

interface File {
  [fileName: string]: string
}

async function downloadImg(uri: string): Promise<string> {
  const response = await fetch(uri)
  const buffer = Buffer.from(await response.arrayBuffer()).toString('base64')
  return buffer
}

const lqip = (url: string) =>
  buildUrl(url, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
    transformations: {
      effect: 'blur:1000',
      quality: 1,
      format: 'jpg',
    },
  })

function buildCloudinaryImages() {
  let files: File = {}
  return async function (url: string): Promise<string | undefined> {
    const fileName = REGEX_FILENAME.exec(url)?.[1]
    REGEX_FILENAME.lastIndex = 0
    if (!!fileName) {
      if (Object.keys(files).includes(fileName)) {
        console.log(`${fileName} already exists`)
        return 'cache'
      }
      const newFile = await downloadImg(lqip(url))
      files[fileName] = newFile
      return 'new'
    }
    console.error('could not determine filename for ' + url)
    return 'poo'
  }
}

export function buildImageMap(): any {
  const buildWithImageCache = buildCloudinaryImages()
  return async function mapData(data: unknown): Promise<unknown> {
    if (Array.isArray(data)) {
      for (const d in data) {
        await mapData(d)
      }
      return data
    }
    if (!!data && typeof data === 'object') {
      return Object.entries(data).reduce((acc, [key, d]) => {
        return mapData(d).then((val) => (val ? { ...acc, [key]: val } : acc))
      }, {})
    }
    if (typeof data === 'string') {
      console.log(data)
      if (data.match(IS_CLOUDINARY_URL)) {
        console.log('go')
        const base64 = await buildWithImageCache(data)
        console.log('done')
        return {
          src: data,
          base64,
        }
      }
      return null
    }
    return null
  }
}
