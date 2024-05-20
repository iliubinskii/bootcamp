import { getRequireValidAuthor } from "./require-valid-author.js";
import { requireIdMatch } from "./require-id-match.js";
import { requireValidExistingBook } from "./require-valid-existing-book.js";
import { requireValidNewBook } from "./require-valid-new-book.js";

export const booksMiddleware = {
  getRequireValidAuthor,
  requireIdMatch,
  requireValidExistingBook,
  requireValidNewBook
};
