/* eslint-disable @typescript-eslint/no-misused-promises -- Ok */

import { booksMiddleware } from "./middleware/index.js";
import express from "express";

/**
 * @param {import("./types.js").BookControllers} bookControllers
 * @param {(id: string) => Promise<boolean>} authorExists
 * @returns {express.Router}
 */
export function getBookRoutes(bookControllers, authorExists) {
  const bookRoutes = express.Router();

  bookRoutes
    .get("/", bookControllers.getBooks)
    .post(
      "/",
      booksMiddleware.requireValidNewBook,
      booksMiddleware.getRequireValidAuthor("newBook", authorExists),
      bookControllers.addBook
    )
    .get("/:id", bookControllers.getBook)
    .put(
      "/:id",
      booksMiddleware.requireValidExistingBook,
      booksMiddleware.requireIdMatch,
      booksMiddleware.getRequireValidAuthor("existingBook", authorExists),
      bookControllers.updateBook
    )
    .delete("/:id", bookControllers.deleteBook);

  return bookRoutes;
}
