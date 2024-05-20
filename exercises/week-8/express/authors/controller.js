/**
 * @param {import("./types.js").AuthorsService} authorsService
 * @returns {import("./types.js").AuthorControllers}
 */
export function getAuthorControllers(authorsService) {
  return {
    getAuthor: async (req, res, next) => {
      try {
        const id = req.params["id"];

        if (typeof id === "string" && id.length) {
          const author = await authorsService.getAuthor(id);

          if (author) res.json(author);
          else res.status(404).json({ error: "Author not found" });
        } else res.status(400).json({ error: "Missing author id" });
      } catch (err) {
        next(err);
      }
    },
    getAuthors: async (_req, res, next) => {
      try {
        const authors = await authorsService.getAuthors();

        res.json(authors);
      } catch (err) {
        next(err);
      }
    }
  };
}
