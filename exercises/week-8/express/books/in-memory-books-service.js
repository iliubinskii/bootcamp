/**
 * @param {(service: import("./types.js").BooksService) => Promise<void>} onDbCreated
 * @returns {Promise<import("./types.js").BooksService>}
 */
export async function getInMemoryBooksService(onDbCreated = async () => {}) {
  /**
   * @type {import("./types.js").Books}
   */
  const books = [];

  /**
   * @type {import("./types.js").BooksService}
   */
  const service = {
    addBook: async book => {
      const index = books.findIndex(candidate => candidate.id === book.id);

      if (index !== -1) return false;

      const { authorId, name, price, id } = book;

      books.push({ authorId, name, price, id });

      return true;
    },
    deleteBook: async id => {
      const index = books.findIndex(candidate => candidate.id === id);

      if (index === -1) return 0;

      books.splice(index, 1);

      return 1;
    },
    getBook: async id => books.find(candidate => candidate.id === id),
    getBooks: async () => books,
    updateBook: async book => {
      const index = books.findIndex(candidate => candidate.id === book.id);

      if (index === -1) return false;

      const { authorId, name, price, id } = book;

      books.splice(index, 1, { authorId, name, price, id });

      return true;
    }
  };

  await onDbCreated(service);

  return service;
}
