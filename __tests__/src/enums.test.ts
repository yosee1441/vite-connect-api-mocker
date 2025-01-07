import { HttpStatus, HttpMethods, HttpContentType } from '@/src/enums'

describe('Enums', () => {
  it('should have the correct HttpStatus values', () => {
    expect(HttpStatus.CREATED).toBe(201)
    expect(HttpStatus.OK).toBe(200)
    expect(HttpStatus.BAD_REQUEST).toBe(400)
    expect(HttpStatus.UNAUTHORIZED).toBe(401)
    expect(HttpStatus.FORBIDDEN).toBe(403)
    expect(HttpStatus.NOT_FOUND).toBe(404)
    expect(HttpStatus.CONFLICT).toBe(409)
    expect(HttpStatus.PAYLOAD_TOO_LARGE).toBe(413)
    expect(HttpStatus.UNPROCESSABLE_ENTITY).toBe(422)
    expect(HttpStatus.TOO_MANY_REQUESTS).toBe(429)
    expect(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS).toBe(451)
    expect(HttpStatus.INTERNAL_SERVER_ERROR).toBe(500)
    expect(HttpStatus.BAD_GATEWAY).toBe(502)
    expect(HttpStatus.SERVICE_UNAVAILABLE).toBe(503)
    expect(HttpStatus.GATEWAY_TIMEOUT).toBe(504)
    expect(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED).toBe(511)
    expect(HttpStatus.NETWORK_CONNECT_TIMEOUT_ERROR).toBe(599)
  })

  it('should have the correct HttpMethods values', () => {
    expect(HttpMethods.POST).toBe('POST')
    expect(HttpMethods.GET).toBe('GET')
    expect(HttpMethods.PUT).toBe('PUT')
    expect(HttpMethods.DELETE).toBe('DELETE')
  })

  it('should have the correct HttpContentType values', () => {
    expect(HttpContentType.JSON).toBe('application/json')
    expect(HttpContentType.TEXT).toBe('text/plain')
    expect(HttpContentType.HTML).toBe('text/html')
    expect(HttpContentType.XML).toBe('application/xml')
    expect(HttpContentType.PDF).toBe('application/pdf')
    expect(HttpContentType.IMAGE).toBe('image/jpeg')
    expect(HttpContentType.VIDEO).toBe('video/mp4')
    expect(HttpContentType.AUDIO).toBe('audio/mpeg')
  })
})
