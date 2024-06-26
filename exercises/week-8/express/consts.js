import { assertDefined } from "./utils.js";
import { config } from "dotenv";

const parsed = assertDefined(config().parsed);

export const APP_PORT = {
  inMemory: 3001,
  jsonDb: 3002,
  mongodb: 3000
};

export const FAKER_BOOK_NAMES = [
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

export const JSON_DB_FILE =
  "../.bootcamp/exercises/week-8/express/json-db.json";

export const JSON_DB_PATH = {
  books: "/books"
};

export const LOGGER_FILE = "../.bootcamp/exercises/week-8/express/log.txt";

export const LOGGER_LOG_LEVEL = "info";

export const MONGODB_DB_NAME = "week-8-express";

export const MONGODB_ENDPOINT = assertDefined(parsed["MONGODB_ENDPOINT"]);

export const RANDOMUSER_RESULTS = 10;

// eslint-disable-next-line spellcheck/spell-checker -- Ok
export const RANDOMUSER_SEED = "Ag4b3c";

export const RATE_LIMIT_MAX = 5;

export const RATE_LIMIT_WINDOW_MS = 10 * 1000;
