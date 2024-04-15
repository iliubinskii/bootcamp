import { APP_PORT, RANDOMUSER_RESULTS, RANDOMUSER_SEED } from "./consts.js";
import {
  getAuthorControllers,
  getAuthorRoutes,
  getRandomuserAuthorsProvider
} from "./authors/index.js";
import express from "express";
import { getBookControllers } from "./books/controller.js";
import { getBookRoutes } from "./books/routes.js";
import { getInMemoryBooksProvider } from "./books/in-memory-books-service.js";

const app = express();

app.get("/", (_req, res) => {
  res.json({
    "/": "Man page",
    "/authors": {
      "/": "The list of authors"
    }
  });
});

app.use(
  "/authors",
  getAuthorRoutes(
    getAuthorControllers(
      getRandomuserAuthorsProvider(RANDOMUSER_RESULTS, RANDOMUSER_SEED)
    )
  )
);

app.use(
  "/books/in-memory",
  getBookRoutes(getBookControllers(getInMemoryBooksProvider()))
);

app.listen(APP_PORT, () => {
  console.log(`Server is listening on port ${APP_PORT}`);
});
