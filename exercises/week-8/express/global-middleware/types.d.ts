import type {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Ok
  Request
} from "express";

declare module "express-serve-static-core" {
  interface Request {
    customRequestId: string;
  }
}
