/**
 * @returns {import("./types.js").BooksService}
 */
export function getInMemoryBooksService() {
  /**
   * @type {import("./types.js").Books}
   */
  const books = [];

  return {
    addBook: async book => {
      const index = books.findIndex(candidate => candidate.id === book.id);

      if (index !== -1) return false;

      const { authorId, name, price, id } = book;

      books.push({ authorId, name, price, id });

      return true;
    },
    deleteBook: async id => {
      const index = books.findIndex(candidate => candidate.id === id);

      if (index !== -1) books.splice(index, 1);
    },
    getBooks: async () => books,
    updateBook: async book => {
      const index = books.findIndex(candidate => candidate.id === book.id);

      if (index === -1) return false;

      const { authorId, name, price, id } = book;

      books.splice(index, 1, { authorId, name, price, id });

      return true;
    }
  };
}
