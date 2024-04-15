import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

/**
 * @param {import("./books/types.d.ts").BooksProvider} booksProvider
 * @param {import("./authors/types.d.ts").AuthorsProvider} authorsProvider
 */
export async function booksFaker(booksProvider, authorsProvider) {
  const authors = await authorsProvider.getAuthors();

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

  await Promise.all(books.map(async book => await booksProvider.addBook(book)));
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
