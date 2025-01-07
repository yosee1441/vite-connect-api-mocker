# Vite Connect API Mocker

It’s a Vite plugin that implements Node.js and Connect to create a middleware that simulates API responses. It is particularly useful for mocking APIs in SPA applications.

## Requirements

- vite >= 4.0.0
- esbuild >= 0.17

## Installation

```bash
npm install vite-connect-api-mocker --save-dev
```

## Usage
- Creation folder `mocks` in root project
- Creation folder `api` in `mocks` folder
- Creation folder `product` in `api` folder
- Creation file `POST.json` in `product` folder

```ts
import {
  connectApiMocker,
  HttpMethods,
  HttpStatus,
  HttpContentType,
} from 'vite-connect-api-mocker'

export default defineConfig({
  plugins: [
    connectApiMocker({
      mocks: [
        {
          url: '/api/product',
          method: HttpMethods.POST,
          timeout: 2000,
          statusCode: HttpStatus.CREATED,
          contentType: HttpContentType.JSON,
          response: async (req, res) => {
            const response = await fs.readFile(
              './mocks/api/product/POST.json',
              'utf-8',
            )
            res.end(response)
          },
        },
      ],
    }),
  ],
})
```

## Available Enumerations
### `HttpStatus`
This enumeration provides standard HTTP status codes that you can use to simulate API responses.
```ts
import { HttpStatus } from 'vite-connect-api-mocker';

console.log(HttpStatus.CREATED); // 201
console.log(HttpStatus.BAD_REQUEST); // 400
```

| Code | Name                           | Description                                          |
|------|--------------------------------|------------------------------------------------------|
| 201  | `CREATED`                     | The request was successful and a resource was created. |
| 200  | `OK`                          | The request was successful.                         |
| 400  | `BAD_REQUEST`                 | The request is invalid.                             |
| 401  | `UNAUTHORIZED`                | The client is not authorized.                       |
| 403  | `FORBIDDEN`                   | The client does not have permission to perform this.|
| 404  | `NOT_FOUND`                   | The requested resource does not exist.              |
| 409  | `CONFLICT`                    | Conflict with the current state of the resource.    |
| 500  | `INTERNAL_SERVER_ERROR`       | Internal server error.                              |
| 503  | `SERVICE_UNAVAILABLE`         | The service is unavailable.                         |
| 504  | `GATEWAY_TIMEOUT`             | The server did not respond in time.                 |
| 502  | `BAD_GATEWAY`                 | Gateway or proxy error.                             |
| 422  | `UNPROCESSABLE_ENTITY`        | Unprocessable entity.                               |
| 429  | `TOO_MANY_REQUESTS`           | Too many requests in a short period of time.        |
| 413  | `PAYLOAD_TOO_LARGE`           | Payload is too large.                               |
| 451  | `UNAVAILABLE_FOR_LEGAL_REASONS` | Unavailable due to legal reasons.                |
| 511  | `NETWORK_AUTHENTICATION_REQUIRED` | Network authentication is required.            |
| 599  | `NETWORK_CONNECT_TIMEOUT_ERROR` | Network connection timeout occurred.             |

---

### `HttpMethods`
This enum lists the standard HTTP methods you can use when interacting with a mock API.

```ts
import { HttpMethods } from 'vite-connect-api-mocker';

console.log(HttpMethods.POST); // 'POST'
console.log(HttpMethods.GET); // 'GET'
```

| Method   | Description                                  |
|----------|----------------------------------------------|
| `POST`   | Sends data to create a resource.            |
| `GET`    | Retrieves data from the server.             |
| `PUT`    | Updates or creates a full resource.         |
| `DELETE` | Deletes an existing resource.               |
| `PATCH`  | Partially updates an existing resource.     |

---

### `HttpContentType`
This enum defines the most common content types you can use in HTTP requests or responses.

```ts
import { HttpContentType } from 'vite-connect-api-mocker';

console.log(HttpContentType.JSON); // 'application/json'
console.log(HttpContentType.HTML); // 'text/html'
```

| Type                      | Value                        | Description                                |
|---------------------------|------------------------------|--------------------------------------------|
| `JSON`                    | `application/json`           | JSON data format.                         |
| `TEXT`                    | `text/plain`                 | Plain text.                               |
| `HTML`                    | `text/html`                  | HTML document.                            |
| `XML`                     | `application/xml`            | XML data format.                          |
| `PDF`                     | `application/pdf`            | PDF file.                                 |
| `IMAGE`                   | `image/jpeg`                 | JPEG image.                               |
| `VIDEO`                   | `video/mp4`                  | MP4 video.                                |
| `AUDIO`                   | `audio/mpeg`                 | MPEG audio.                               |

---

