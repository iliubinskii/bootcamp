/**
 * @param {import("./types.js").AuthorsProvider} authorsProvider
 * @returns {import("./types.js").AuthorControllers}
 */
export function getAuthorControllers(authorsProvider) {
  return {
    getAuthor: async (req, res) => {
      const id = req.params["id"];

      if (typeof id === "string" && id.length) {
        const author = await authorsProvider.getAuthor(id);

        if (author) res.json(author);
        else res.status(404).json({ error: "Author not found" });
      } else res.status(400).json({ error: "Author ID is required" });
    },
    getAuthors: async (_req, res) => {
      const authors = await authorsProvider.getAuthors();

      res.json(authors);
    }
  };
}
