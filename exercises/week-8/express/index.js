import { APP_PORT, RANDOMUSER_RESULTS, RANDOMUSER_SEED } from "./consts.js";
import {
  getAuthorControllers,
  getAuthorRoutes,
  getRandomuserAuthorsProvider
} from "./authors/index.js";
import { booksFaker } from "./faker.js";
import express from "express";
import { getBookControllers } from "./books/controller.js";
import { getBookRoutes } from "./books/routes.js";
import { getInMemoryBooksProvider } from "./books/in-memory-books-service.js";

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- Ok
main();

async function main() {
  const authorsProvider = getRandomuserAuthorsProvider(
    RANDOMUSER_RESULTS,
    RANDOMUSER_SEED
  );

  const inMemoryBooksProvider = getInMemoryBooksProvider();

  await booksFaker(inMemoryBooksProvider, authorsProvider);

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
      }
    });
  });

  app.use("/authors", getAuthorRoutes(getAuthorControllers(authorsProvider)));

  app.use(
    "/books/in-memory",
    getBookRoutes(getBookControllers(inMemoryBooksProvider))
  );

  app.listen(APP_PORT, () => {
    console.log(`Server is listening on port ${APP_PORT}`);
  });
}