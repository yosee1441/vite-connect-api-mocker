import { delay, convertToJson } from '@/src/helpers'

describe('delay', () => {
  it('should resolve after the specified delay', async () => {
    const delayTime = 1000
    const promise = delay(delayTime)

    jest.advanceTimersByTime(delayTime)

    await expect(promise).resolves.toBeUndefined()
  })
})

describe('convertToJson', () => {
  it('should convert an object to a JSON string', async () => {
    const obj = { key: 'value' }
    const jsonString = await convertToJson(obj)
    expect(jsonString).toBe('{"key":"value"}')
  })
})
