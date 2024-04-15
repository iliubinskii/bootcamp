/**
 * @returns {import("./types.js").BooksProvider}
 */
export function getInMemoryBooksProvider() {
  /**
   * @type {import("./types.js").Books}
   */
  const books = [
    { id: "2", name: "Harry Potter", authorId: "2", price: "200$" },
    { id: "3", name: "The Lord of the Rings", authorId: "3", price: "300$" },
    { id: "4", name: "The Hobbit", authorId: "3", price: "400$" },
    { id: "5", name: "The Catcher in the Rye", authorId: "4", price: "500$" },
    { id: "6", name: "The Great Gatsby", authorId: "5", price: "600$" },
    { id: "7", name: "To Kill a Mockingbird", authorId: "6", price: "700$" },
    { id: "9", name: "Pride and Prejudice", authorId: "8", price: "900$" },
    { id: "11", name: "Jane Eyre", authorId: "10", price: "1100$" },
    { id: "13", name: "Frankenstein", authorId: "11", price: "1300$" },
    { id: "14", name: "Dracula", authorId: "12", price: "1400$" }
  ];

  return {
    addBook: async book => {
      if (books.find(candidate => candidate.id === book.id)) return false;

      books.push(book);

      return true;
    },
    getBooks: async () => books
  };
}
