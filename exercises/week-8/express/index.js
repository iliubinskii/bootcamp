import {
  APP_PORT,
  JSON_DB_FILE,
  JSON_DB_PATH,
  MONGODB_DB_NAME,
  MONGODB_ENDPOINT,
  RANDOMUSER_RESULTS,
  RANDOMUSER_SEED
} from "./consts.js";
import {
  getInMemoryBooksService,
  getJsonDbBooksService,
  getMongodbBooksService
} from "./books/index.js";
import { booksFaker } from "./faker.js";
import { createApp } from "./app.js";
import { getRandomuserAuthorsProvider } from "./authors/index.js";

const authorsService = getRandomuserAuthorsProvider(
  RANDOMUSER_RESULTS,
  RANDOMUSER_SEED
);

Promise.all([
  createApp(
    APP_PORT.inMemory,
    authorsService,
    await getInMemoryBooksService(addBooks)
  ),
  createApp(
    APP_PORT.jsonDb,
    authorsService,
    await getJsonDbBooksService(JSON_DB_FILE, JSON_DB_PATH.books, addBooks)
  ),
  createApp(
    APP_PORT.mongodb,
    authorsService,
    await getMongodbBooksService(MONGODB_ENDPOINT, MONGODB_DB_NAME, addBooks)
  )
]).catch(error => {
  console.error(error);
});

/**
 * @param {import("./books/types.js").BooksService} service
 */
async function addBooks(service) {
  await booksFaker(service, authorsService);
}
