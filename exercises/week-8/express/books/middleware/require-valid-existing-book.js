/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function requireValidExistingBook(req, res, next) {
  /**
   * @type {unknown}
   */
  const body = req.body;

  if (
    typeof body === "object" &&
    body &&
    Object.values(body).length === 4 &&
    "authorId" in body &&
    "id" in body &&
    "name" in body &&
    "price" in body &&
    typeof body.authorId === "string" &&
    typeof body.id === "string" &&
    typeof body.name === "string" &&
    typeof body.price === "string"
  ) {
    const { authorId, id, name, price } = body;

    req.customExistingBook = { authorId, id, name, price };
    next();
  } else res.status(400).json({ error: "Invalid book data" });
}
