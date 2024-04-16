import {
  APP_PORT,
  IN_MEMORY_INITIAL_BOOKS_COUNT,
  JSON_DB_FILE,
  JSON_DB_INITIAL_BOOKS_COUNT,
  JSON_DB_PATH,
  RANDOMUSER_RESULTS,
  RANDOMUSER_SEED
} from "./consts.js";
import {
  getAuthorControllers,
  getAuthorRoutes,
  getRandomuserAuthorsProvider
} from "./authors/index.js";
import {
  getBookControllers,
  getBookRoutes,
  getInMemoryBooksService,
  getJsonDbBooksService
} from "./books/index.js";
import { booksFaker } from "./faker.js";
import express from "express";

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- Ok
main();

async function main() {
  const authorsService = getRandomuserAuthorsProvider(
    RANDOMUSER_RESULTS,
    RANDOMUSER_SEED
  );

  const [inMemoryBooksService, jsonDbBooksService] = await Promise.all([
    getInMemoryBooksService(async service => {
      await booksFaker(service, authorsService, IN_MEMORY_INITIAL_BOOKS_COUNT);
    }),
    getJsonDbBooksService(JSON_DB_FILE, JSON_DB_PATH.books, async service => {
      await booksFaker(service, authorsService, JSON_DB_INITIAL_BOOKS_COUNT);
    })
  ]);

  const app = express();

  app.get("/", (_req, res) => {
    res.json({
      "/": "Man page",
      "/authors": {
        "/": "The list of authors",
        "/:id": "The author details"
      },
      "/books/in-memory": {
        "/": "The list of books",
        "/:id": "The book details"
      },
      "/books/json-db": {
        "/": "The list of books",
        "/:id": "The book details"
      }
    });
  });

  app.use("/authors", getAuthorRoutes(getAuthorControllers(authorsService)));

  app.use(
    "/books/in-memory",
    getBookRoutes(getBookControllers(inMemoryBooksService, authorExists))
  );

  app.use(
    "/books/json-db",
    getBookRoutes(getBookControllers(jsonDbBooksService, authorExists))
  );

  app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
  });

  /**
   * @param {string} id
   * @returns {Promise<boolean>}
   */
  async function authorExists(id) {
    const author = await authorsService.getAuthor(id);

    return Boolean(author);
  }
}
