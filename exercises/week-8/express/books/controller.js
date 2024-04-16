import { v4 as uuidv4 } from "uuid";

/**
 * @param {import("./types.js").BooksService} booksService
 * @param {(id: string) => Promise<boolean>} authorExists
 * @returns {import("./types.js").BookControllers}
 */
export function getBookControllers(booksService, authorExists) {
  return {
    addBook: async (req, res) => {
      /**
       * @type {unknown}
       */
      const body = req.body;

      if (
        typeof body === "object" &&
        body &&
        Object.values(body).length === 3 &&
        "authorId" in body &&
        "name" in body &&
        "price" in body &&
        typeof body.authorId === "string" &&
        typeof body.name === "string" &&
        typeof body.price === "string"
      ) {
        const { name, price, authorId } = body;

        const author = await authorExists(authorId);

        if (author) {
          const book = { authorId, id: uuidv4(), name, price };

          const success = await booksService.addBook(book);

          if (success) res.status(201).json(book);
          else res.status(409).send("Book already exists");
        } else res.status(400).send("Author not found");
      } else res.status(400).send("Invalid book data");
    },
    deleteBook: async (req, res) => {
      const id = req.params["id"];

      if (typeof id === "string") {
        await booksService.deleteBook(id);

        res.status(204).send();
      } else res.status(400).send("Missing book id");
    },
    getBooks: async (_req, res) => {
      const books = await booksService.getBooks();

      res.json(books);
    },
    updateBook: async (req, res) => {
      const id = req.params["id"];

      if (typeof id === "string") {
        /**
         * @type {unknown}
         */
        const body = req.body;

        if (
          typeof body === "object" &&
          body &&
          Object.values(body).length === 4 &&
          "authorId" in body &&
          "id" in body &&
          "name" in body &&
          "price" in body &&
          typeof body.authorId === "string" &&
          typeof body.id === "string" &&
          typeof body.name === "string" &&
          typeof body.price === "string" &&
          body.id === id
        ) {
          const { authorId, name, price } = body;

          const author = await authorExists(authorId);

          if (author) {
            const book = { authorId, id, name, price };

            const success = await booksService.updateBook(book);

            if (success) res.status(200).json(book);
            else res.status(404).send("Book not found");
          } else res.status(400).send("Author not found");
        } else res.status(400).send("Invalid book data");
      } else res.status(400).send("Missing book id");
    }
  };
}
