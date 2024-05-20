import { NewBookSchema } from "../validation-schema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function requireValidNewBook(req, res, next) {
  try {
    req.customNewBook = NewBookSchema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid book data" });
  }
}
