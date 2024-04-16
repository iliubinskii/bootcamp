/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function requireValidNewBook(req, res, next) {
  /**
   * @type {unknown}
   */
  const body = req.body;

  if (
    typeof body === "object" &&
    body &&
    Object.values(body).length === 3 &&
    "authorId" in body &&
    "name" in body &&
    "price" in body &&
    typeof body.authorId === "string" &&
    typeof body.name === "string" &&
    typeof body.price === "string"
  ) {
    const { authorId, name, price } = body;

    req.customNewBook = { authorId, name, price };
    next();
  } else res.status(400).json({ error: "Invalid book data" });
}
