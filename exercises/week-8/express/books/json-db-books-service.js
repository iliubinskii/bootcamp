import { Config, JsonDB } from "node-json-db";

/**
 * @param {string} file
 * @param {string} path
 * @returns {import("./types.js").BooksService}
 */
export function getJsonDbBooksService(file, path) {
  var db = new JsonDB(new Config(file, true, true, "/"));

  return {
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
}
