import type { Plugin, ResolvedConfig } from "vite";
import connect, { IncomingMessage } from "connect";
import { ServerResponse } from "http";
import bodyParser from "body-parser";
import { delay } from "./utils";
import type { HttpStatus, HttpMethods, HttpContentType } from "./utils";

interface MockMethod {
  url: string;
  method: HttpMethods;
  timeout: number;
  statusCode?: HttpStatus;
  contentType?: HttpContentType;
  response: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>;
}

interface MockApiPluginOptions {
  mocks: MockMethod[];
}

function requestMiddleware(options: MockApiPluginOptions) {
  const app = connect();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  for (const option of options.mocks) {
    app.use(option.url, (request, response) => {
      if (request.method === option.method) {
        if (option?.contentType) {
          response.setHeader("content-type", option.contentType);
        }
        if (option?.statusCode) {
          response.statusCode = option.statusCode;
        }
        delay(option.timeout).then(() => {
          option.response(request, response);
        });
      }
    });
  }
  return app;
}

export function connectApiMocker(options: MockApiPluginOptions): Plugin {
  let config: ResolvedConfig;

  return {
    name: "vite:connect-api-mocker",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    configureServer: ({ middlewares }) => {
      if (config.mode === "serve") {
        return;
      }
      middlewares.use(requestMiddleware(options));
    },
  };
}
