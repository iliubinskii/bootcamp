/* eslint-disable @typescript-eslint/no-misused-promises -- Ok */

import express from "express";

/**
 * @param {import("./types.js").AuthorControllers} authorControllers
 * @returns {express.Router}
 */
export function getAuthorRoutes(authorControllers) {
  const authorRoutes = express.Router();

  authorRoutes
    .get("/", authorControllers.getAuthors)
    .get("/:id", authorControllers.getAuthor);

  return authorRoutes;
}
