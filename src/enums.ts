export enum HttpStatus {
  CREATED = 201,
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  BAD_GATEWAY = 502,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
  PAYLOAD_TOO_LARGE = 413,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  NETWORK_CONNECT_TIMEOUT_ERROR = 599,
}

export enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export enum HttpContentType {
  JSON = 'application/json',
  TEXT = 'text/plain',
  HTML = 'text/html',
  XML = 'application/xml',
  PDF = 'application/pdf',
  IMAGE = 'image/jpeg',
  VIDEO = 'video/mp4',
  AUDIO = 'audio/mpeg',
}
