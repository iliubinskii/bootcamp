import { assertDefined } from "../utils.js";
import { v4 as uuidv4 } from "uuid";

/**
 * @param {import("./types.js").BooksService} booksService
 * @returns {import("./types.js").BookControllers}
 */
export function getBookControllers(booksService) {
  return {
    addBook: async (req, res) => {
      const newBook = assertDefined(req.customNewBook);

      const book = { ...newBook, id: uuidv4() };

      const success = await booksService.addBook(book);

      if (success) res.status(201).json(book);
      else res.status(409).json({ error: "Book already exists" });
    },
    deleteBook: async (req, res) => {
      const id = assertDefined(req.params["id"]);

      const affectedRows = await booksService.deleteBook(id);

      res.status(200).send({ affectedRows });
    },
    getBook: async (req, res) => {
      const id = assertDefined(req.params["id"]);

      const book = await booksService.getBook(id);

      if (book) res.json(book);
      else res.status(404).json({ error: "Book not found" });
    },
    getBooks: async (_req, res) => {
      const books = await booksService.getBooks();

      res.json(books);
    },
    updateBook: async (req, res) => {
      const book = assertDefined(req.customExistingBook);

      const success = await booksService.updateBook(book);

      if (success) res.status(200).json(book);
      else res.status(404).json({ error: "Book not found" });
    }
  };
}
