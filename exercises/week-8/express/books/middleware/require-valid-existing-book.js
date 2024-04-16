import { ExistingBookSchema } from "../validation-schema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function requireValidExistingBook(req, res, next) {
  try {
    req.customExistingBook = ExistingBookSchema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid book data" });
  }
}
