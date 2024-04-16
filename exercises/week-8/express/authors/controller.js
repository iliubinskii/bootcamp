/**
 * @param {import("./types.js").AuthorsService} authorsService
 * @returns {import("./types.js").AuthorControllers}
 */
export function getAuthorControllers(authorsService) {
  return {
    getAuthor: async (req, res) => {
      const id = req.params["id"];

      if (typeof id === "string" && id.length) {
        const author = await authorsService.getAuthor(id);

        if (author) res.json(author);
        else res.status(404).json({ error: "Author not found" });
      } else res.status(400).json({ error: "Missing author id" });
    },
    getAuthors: async (_req, res) => {
      const authors = await authorsService.getAuthors();

      res.json(authors);
    }
  };
}
