/* eslint-disable @typescript-eslint/no-misused-promises -- Ok */

import express from "express";

/**
 * @param {import("./types.js").BookControllers} bookControllers
 * @returns {express.Router}
 */
export function getBookRoutes(bookControllers) {
  const bookRoutes = express.Router();

  bookRoutes
    .get("/", bookControllers.getBooks)
    .post("/", bookControllers.addBook)
    .get("/:id", bookControllers.getBook)
    .put("/:id", bookControllers.updateBook)
    .delete("/:id", bookControllers.deleteBook);

  return bookRoutes;
}
