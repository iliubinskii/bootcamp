import { v4 as uuidv4 } from "uuid";

/**
 * @param {import("./types.js").BooksProvider} booksProvider
 * @returns {import("./types.js").BookControllers}
 */
export function getBookControllers(booksProvider) {
  return {
    addBook: async (req, res) => {
      /**
       * @type {unknown}
       */
      const book = req.body;

      if (
        typeof book === "object" &&
        book &&
        "authorId" in book &&
        "name" in book &&
        "price" in book &&
        typeof book.authorId === "string" &&
        typeof book.name === "string" &&
        typeof book.price === "string"
      ) {
        const { name, price, authorId } = book;

        const success = await booksProvider.addBook({
          authorId,
          name,
          price,
          id: uuidv4()
        });

        if (success) res.status(201).send("Book added");
        else res.status(409).send("Book already exists");
      } else res.status(400).send("Invalid book");
    },
    getBooks: async (_req, res) => {
      const books = await booksProvider.getBooks();

      res.json(books);
    }
  };
}
