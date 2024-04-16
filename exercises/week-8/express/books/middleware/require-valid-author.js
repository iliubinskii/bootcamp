import { assertDefined } from "../utils.js";

/**
 * @param {"existingBook" | "newBook"} source
 * @param {(id: string) => Promise<boolean>} authorExists
 */
export function getRequireValidAuthor(source, authorExists) {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  return async (req, res, next) => {
    const { authorId } = (() => {
      switch (source) {
        case "existingBook":
          return assertDefined(req.customExistingBook);

        case "newBook":
          return assertDefined(req.customNewBook);
      }
    })();

    const exists = await authorExists(authorId);

    if (exists) next();
    else res.status(409).json({ error: "Author not found" });
  };
}
