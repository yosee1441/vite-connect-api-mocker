import { IncomingMessage, NextFunction } from 'connect'
import { ServerResponse } from 'http'

jest.useFakeTimers()

jest.mock('body-parser', () => ({
  json: jest
    .fn()
    .mockReturnValue(
      (req: IncomingMessage, res: ServerResponse, next: NextFunction) => next(),
    ),
  urlencoded: jest
    .fn()
    .mockReturnValue(
      (req: IncomingMessage, res: ServerResponse, next: NextFunction) => next(),
    ),
}))
