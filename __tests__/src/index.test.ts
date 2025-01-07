import {
  connectApiMocker,
  HttpContentType,
  HttpMethods,
  HttpStatus,
  MockMethod,
} from '@/src'
import { IncomingMessage } from 'connect'
import { ServerResponse } from 'http'

describe('connectApiMocker', () => {
  let mockMethods: MockMethod[]
  let mockPlugin: ReturnType<typeof connectApiMocker>

  beforeEach(() => {
    mockMethods = [
      {
        url: '/api/test',
        method: HttpMethods.GET,
        timeout: 100,
        statusCode: HttpStatus.OK,
        contentType: HttpContentType.JSON,
        response: (req: IncomingMessage, res: ServerResponse) => {
          res.end(JSON.stringify({ success: true }))
        },
      },
    ]
    mockPlugin = connectApiMocker({ mocks: mockMethods })
  })

  it('should define the plugin', () => {
    expect(mockPlugin).toBeDefined()
  })

  it('should be a function', () => {
    expect(connectApiMocker).toBeInstanceOf(Function)
  })

  it('should return a Plugin', () => {
    expect(mockPlugin).toHaveProperty('name')
    expect(mockPlugin).toHaveProperty('configureServer')
    expect(mockPlugin).toHaveProperty('configResolved')
  })

  it('should have a name', () => {
    expect(mockPlugin.name).toBe('vite:connect-api-mocker')
  })

  it('should have a configResolved method', () => {
    expect(mockPlugin.configResolved).toBeInstanceOf(Function)
  })

  it('should have a configureServer method', () => {
    expect(mockPlugin.configureServer).toBeInstanceOf(Function)
  })
})
