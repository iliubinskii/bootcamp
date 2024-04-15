/**
 * @param {import("./types.js").AuthorsProvider} authorsProvider
 * @returns {import("./types.js").AuthorControllers}
 */
export function getAuthorControllers(authorsProvider) {
  return {
    getAuthors: async (_req, res) => {
      const authors = await authorsProvider.getAuthors();

      res.json(authors);
    }
  };
}
