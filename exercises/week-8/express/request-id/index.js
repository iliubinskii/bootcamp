import { v4 as uuidv4 } from "uuid";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} _res
 * @param {import("express").NextFunction} next
 */
export function requestId(req, _res, next) {
  req.customRequestId = uuidv4();
  next();
}
