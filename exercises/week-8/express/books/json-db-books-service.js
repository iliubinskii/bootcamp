import { Config, JsonDB } from "node-json-db";

/**
 * @param {string} file
 * @param {string} path
 * @param {(service: import("./types.js").BooksService) => Promise<void>} onDbCreated
 * @returns {Promise<import("./types.js").BooksService>}
 */
export async function getJsonDbBooksService(
  file,
  path,
  onDbCreated = async () => {}
) {
  var db = new JsonDB(new Config(file, true, true, "/"));

  /**
   * @type {import("./types.js").BooksService}
   */
  const service = {
    addBook: async book => {
      const index = await db.getIndex(path, "id", book.id);

      if (index !== -1) return false;

      const { authorId, name, price, id } = book;

      await db.push(path, { authorId, name, price, id });

      return true;
    },
    deleteBook: async id => {
      const index = await db.getIndex(path, "id", id);

      if (index !== -1) await db.delete(`${path}[${index}]`);
    },
    getBook: async id => {
      const index = await db.getIndex(path, "id", id);

      if (index === -1) return undefined;

      return await db.getData(`${path}[${index}]`);
    },
    getBooks: async () => {
      return db.getData(path);
    },
    updateBook: async book => {
      const index = await db.getIndex(path, "id", book.id);

      if (index === -1) return false;

      const { authorId, name, price, id } = book;

      await db.push(`${path}[${index}]`, {
        authorId,
        name,
        price,
        id
      });

      return true;
    }
  };

  const exists = await db.exists(path);

  if (!exists) {
    await db.push(path, []);
    await onDbCreated(service);
  }

  return service;
}
