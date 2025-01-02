# Vite Connect API Mocker

It’s a Vite plugin that implements Node.js and Connect to create a middleware that simulates API responses. It is particularly useful for mocking APIs.

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
  importJson,
  convertToJson,
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
            const response = await importJson(
              './mocks/api/product/POST.json',
            )
            res.end(convertToJson(response))
          },
        },
      ],
    }),
  ],
})
```
