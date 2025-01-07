import { Readable } from 'stream'

export const delay = (ms: number = 2000) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const readableDataStream = (data: string): Readable => {
  const dataChunks = data.split('')
  const readableStream = new Readable({
    read() {
      const chunk = dataChunks.shift()
      if (!chunk) {
        this.push(null)
      } else {
        this.push(chunk)
      }
    },
  })

  return readableStream
}
