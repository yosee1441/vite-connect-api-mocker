import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {
  connectApiMocker,
  HttpMethods,
  HttpStatus,
  HttpContentType,
} from 'vite-connect-api-mocker'
import fs from 'fs/promises'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    connectApiMocker({
      mocks: [
        {
          url: '/api/product',
          method: HttpMethods.GET,
          timeout: 2000,
          statusCode: HttpStatus.OK,
          contentType: HttpContentType.JSON,
          response: async (req, res) => {
            const response = await fs.readFile(
              './mocks/api/product/GET.json',
              'utf-8',
            )
            res.end(response)
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
    },
  },
})
