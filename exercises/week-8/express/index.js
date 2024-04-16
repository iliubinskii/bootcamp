import {
  APP_PORT,
  JSON_DB_FILE,
  JSON_DB_PATH,
  RANDOMUSER_RESULTS,
  RANDOMUSER_SEED,
  RATE_LIMIT_MAX,
  RATE_LIMIT_WINDOW_MS
} from "./consts.js";
import {
  getAuthorControllers,
  getAuthorRoutes,
  getRandomuserAuthorsProvider
} from "./authors/index.js";
import {
  getBookControllers,
  getBookRoutes,
  getInMemoryBooksService,
  getJsonDbBooksService
} from "./books/index.js";
import { booksFaker } from "./faker.js";
import { delay } from "./utils.js";
import express from "express";
import fs from "fs";
import path from "path";
import rateLimit from "express-rate-limit";

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- Ok
main();

async function main() {
  const authorsService = getRandomuserAuthorsProvider(
    RANDOMUSER_RESULTS,
    RANDOMUSER_SEED
  );

  const [inMemoryBooksService, jsonDbBooksService] = await Promise.all([
    getInMemoryBooksService(async service => {
      await booksFaker(service, authorsService);
    }),
    getJsonDbBooksService(JSON_DB_FILE, JSON_DB_PATH.books, async service => {
      await booksFaker(service, authorsService);
    })
  ]);

  const app = express();

  app.use(
    rateLimit({
      windowMs: RATE_LIMIT_WINDOW_MS,
      max: RATE_LIMIT_MAX
    })
  );

  app.use(express.json());

  app.get("/", (_req, res) => {
    const dataBuffer = fs.readFileSync(
      path.join(import.meta.dirname, "postman.json")
    );

    const dataStr = dataBuffer.toString();

    res.json(JSON.parse(dataStr));
  });

  app.use("/authors", getAuthorRoutes(getAuthorControllers(authorsService)));

  app.use(
    "/books/in-memory",
    getBookRoutes(getBookControllers(inMemoryBooksService), authorExists)
  );

  app.use(
    "/books/json-db",
    getBookRoutes(getBookControllers(jsonDbBooksService), authorExists)
  );

  app.get("*", (_req, res) => {
    res.status(404).json({ error: "404 Not Found" });
  });

  app.get("/sync-reject", () => {
    throw Error("Sync error demo!");
  });

  app.get(
    "/async-reject",
    /**
     * @param {express.Request} _req
     * @param {express.Response} _res
     * @param {express.NextFunction} next
     */
    // eslint-disable-next-line @typescript-eslint/no-misused-promises -- Ok
    async (_req, _res, next) => {
      try {
        await delay(100);
        throw Error("Async error demo!");
      } catch (err) {
        next(err);
      }
    }
  );

  app.use(
    /**
     * @param {Error} err
     * @param {express.Request} _req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Ok
    (err, _req, res, next) => {
      res.status(500).json({ message: err.message });
      next();
    }
  );

  app.listen(APP_PORT, () => {
    console.info(`Server is listening on port ${APP_PORT}`);
  });

  /**
   * @param {string} id
   * @returns {Promise<boolean>}
   */
  async function authorExists(id) {
    const author = await authorsService.getAuthor(id);

    return Boolean(author);
  }
}
