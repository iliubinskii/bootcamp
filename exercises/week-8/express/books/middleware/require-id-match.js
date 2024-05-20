import { assertDefined } from "../../utils.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function requireIdMatch(req, res, next) {
  const { id } = assertDefined(req.customExistingBook);

  const idParam = assertDefined(req.params["id"]);

  if (id === idParam) next();
  else res.status(400).json({ error: "ID mismatch" });
}
