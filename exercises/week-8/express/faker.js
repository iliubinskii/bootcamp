import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

/**
 * @param {import("./books/types.d.ts").BooksService} booksService
 * @param {import("./authors/types.d.ts").AuthorsService} authorsService
 */
export async function booksFaker(booksService, authorsService) {
  const authors = await authorsService.getAuthors();

  /**
   * @type {import("./books/types.js").Books}
   */
  const books = bookNames.map(name => ({
    authorId: faker.helpers.arrayElement(authors).id,
    id: uuidv4(),
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

const bookNames = [
  "Harry Potter",
  "The Lord of the Rings",
  "The Hobbit",
  "The Catcher in the Rye",
  "The Great Gatsby",
  "To Kill a Mockingbird",
  "Pride and Prejudice",
  "Jane Eyre",
  "Frankenstein",
  "Dracula"
];
