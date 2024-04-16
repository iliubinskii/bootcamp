import {
  APP_PORT,
  JSON_DB_FILE,
  JSON_DB_PATH,
  LOGGER_FILE,
  LOGGER_LOG_LEVEL,
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
import { createLogger } from "./logger.js";
import { getRandomuserAuthorsProvider } from "./authors/index.js";

const logger = createLogger(LOGGER_FILE, LOGGER_LOG_LEVEL, 0);

main().catch(error => {
  logger.error(error);
});

async function main() {
  const authorsService = getRandomuserAuthorsProvider(
    RANDOMUSER_RESULTS,
    RANDOMUSER_SEED
  );

  await Promise.all([createApp1(), createApp2(), createApp3()]);

  async function createApp1() {
    const logger = createLogger(
      LOGGER_FILE,
      LOGGER_LOG_LEVEL,
      APP_PORT.inMemory
    );

    try {
      const booksService = await getInMemoryBooksService(addBooks);

      await createApp(APP_PORT.inMemory, authorsService, booksService, logger);
    } catch (error) {
      logger.error(error);
    }
  }

  async function createApp2() {
    const logger = createLogger(LOGGER_FILE, LOGGER_LOG_LEVEL, APP_PORT.jsonDb);

    try {
      const booksService = await getJsonDbBooksService(
        JSON_DB_FILE,
        JSON_DB_PATH.books,
        addBooks
      );

      await createApp(APP_PORT.jsonDb, authorsService, booksService, logger);
    } catch (error) {
      logger.error(error);
    }
  }

  async function createApp3() {
    const logger = createLogger(
      LOGGER_FILE,
      LOGGER_LOG_LEVEL,
      APP_PORT.mongodb
    );

    try {
      const booksService = await getMongodbBooksService(
        MONGODB_ENDPOINT,
        MONGODB_DB_NAME,
        addBooks
      );

      await createApp(APP_PORT.mongodb, authorsService, booksService, logger);
    } catch (error) {
      logger.error(error);
    }
  }

  /**
   * @param {import("./books/types.js").BooksService} service
   */
  async function addBooks(service) {
    await booksFaker(service, authorsService);
  }
}
