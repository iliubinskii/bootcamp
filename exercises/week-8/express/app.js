import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from "./consts.js";
import { getAuthorControllers, getAuthorRoutes } from "./authors/index.js";
import { getBookControllers, getBookRoutes } from "./books/index.js";
import { getRequestLogger, requestId } from "./global-middleware/index.js";
import { delay } from "./utils.js";
import express from "express";
import fs from "fs";
import path from "path";
import rateLimit from "express-rate-limit";

/**
 * @param {number} port
 * @param {import("./authors/types.js").AuthorsService} authorsService
 * @param {import("./books/types.js").BooksService} booksService
 * @param {import("winston").Logger} logger
 */
export async function createApp(port, authorsService, booksService, logger) {
  const app = express();

  app.use(requestId);
  app.use(getRequestLogger(logger));

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
    "/books",
    getBookRoutes(getBookControllers(booksService), authorExists)
  );

  app.get("/health", (_req, res) => {
    res.status(200).send("Server is running!");
  });

  app.get("/sync-reject", () => {
    throw Error("Sync error!");
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
        throw Error("Async error!");
      } catch (error) {
        next(error);
      }
    }
  );

  app.all("*", (_req, res) => {
    res.status(404).json({ error: "404 Not Found" });
  });

  app.use(
    /**
     * @param {Error} err
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Ok
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Ok
    (err, req, res, next) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Ok
      // @ts-expect-error
      logger.error(err, { requestId: req.customRequestId });
      res.status(500).json({ message: err.message });
    }
  );

  app.listen(port, () => {
    logger.info("Server started");
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
