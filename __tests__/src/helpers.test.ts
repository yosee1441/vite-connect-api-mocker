import { delay } from '@/src/helpers'

describe('delay', () => {
  it('should resolve after the specified delay', async () => {
    const delayTime = 1000
    const promise = delay(delayTime)

    jest.advanceTimersByTime(delayTime)

    await expect(promise).resolves.toBeUndefined()
  })
})
