import { FAKER_BOOK_NAMES } from "./consts.js";
import crypto from "crypto";
import { faker } from "@faker-js/faker";

/**
 * @param {import("./books/types.d.ts").BooksService} booksService
 * @param {import("./authors/types.d.ts").AuthorsService} authorsService
 */
export async function booksFaker(booksService, authorsService) {
  const authors = await authorsService.getAuthors();

  /**
   * @type {import("./books/types.js").Books}
   */
  const books = FAKER_BOOK_NAMES.map(name => ({
    authorId: faker.helpers.arrayElement(authors).id,
    id: uuidFaker(name),
    name,
    price: faker.finance.amount({
      dec: 0,
      max: 1500,
      min: 100,
      symbol: "$"
    })
  }));

  await Promise.all(books.map(async book => await booksService.addBook(book)));
}

/**
 * @param {string} str
 * @returns {string}
 */
function uuidFaker(str) {
  const hash = crypto.createHash("sha256").update(str).digest("hex");

  const uuidLike = `${hash.substring(0, 8)}-${hash.substring(8, 12)}-5${hash.substring(13, 16)}-${hash.substring(16, 20)}-${hash.substring(20, 32)}`;

  return uuidLike;
}
