/**
 * @param {import("./types.js").BooksProvider} booksProvider
 * @returns {import("./types.js").BookControllers}
 */
export function getBookControllers(booksProvider) {
  return {
    getBooks: async (_req, res) => {
      const books = await booksProvider.getBooks();

      res.json(books);
    }
  };
}
