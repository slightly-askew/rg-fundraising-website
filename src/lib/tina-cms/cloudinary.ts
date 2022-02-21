import fs from 'fs'
import fetch from 'node-fetch'
import { buildUrl } from 'cloudinary-build-url'
import internal from 'stream'

const IS_CLOUDINARY_URL = /^https:\/\/res\.cloudinary\.com/

// function to encode file data to base64 encoded string
function base64_encode(file: fs.PathOrFileDescriptor): string {
  // read binary data
  var bitmap = fs.readFileSync(file)
  // convert binary data to base64 encoded string
  return Buffer.from(bitmap).toString('base64')
}

function downloadImg(uri: string, fileName: string) {
  return new Promise(async function (resolve) {
    const writeStream = fs.createWriteStream(fileName)
    const data = await fetch(uri)
    const blob = data
      .blob()
      .pipe()
      .on('close', () => {
        console.log(
          'wrote all data to file ' + writeStream.bytesWritten + ' bytes'
        )
      })
  })
}

export async function buildCloudinaryImage(url: string) {
  const lqip = buildUrl(url, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
    transformations: {
      effect: 'blur:1000',
      quality: 1,
      format: 'jpg',
    },
  })
  const rx = /\/([^\/]+)$/gi
  const fileName = rx.exec(lqip)?.[1]

  console.log('filename is ' + fileName)
  if (fileName) {
    const b64 = await downloadImg(lqip, fileName).then((res) => res)

    return b64
  }
  console.error('could not generate filename from ' + lqip)
}

export function buildImageMap(data: any): any {
  if (Array.isArray(data)) {
    return data.reduce((acc, d) => acc.concat(buildImageMap(d)), [])
  }
  if (!!data && typeof data === 'object') {
    return Object.entries(data).reduce((acc, [key, val]) => {
      const newMap = buildImageMap(val)
      if (newMap) {
        return { ...acc, [key]: buildImageMap(val) }
      }
      return acc
    }, {})
  }
  if (typeof data === 'string') {
    if (data.match(IS_CLOUDINARY_URL)) {
      const base64 = buildCloudinaryImage(data).then((res) => {
        return {
          src: data,
          base64: res,
        }
      })
    }
    return null
  }
  return null
}
