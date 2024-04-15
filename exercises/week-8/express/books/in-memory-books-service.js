/**
 * @returns {import("./types.js").BooksProvider}
 */
export function getInMemoryBooksProvider() {
  /**
   * @type {import("./types.js").Books}
   */
  const books = [];

  return {
    addBook: async book => {
      if (books.find(candidate => candidate.id === book.id)) return false;

      books.push(book);

      return true;
    },
    getBooks: async () => books
  };
}
