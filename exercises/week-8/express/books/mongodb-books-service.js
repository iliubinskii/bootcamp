import mongoose from "mongoose";

/**
 * @param {string} endpoint
 * @param {string} dbName
 * @param {(service: import("./types.js").BooksService) => Promise<void>} onDbCreated
 * @returns {Promise<import("./types.js").BooksService>}
 */
export async function getMongodbBooksService(
  endpoint,
  dbName,
  onDbCreated = async () => {}
) {
  /**
   * @type {import("./types.js").BooksService}
   */
  const service = {
    addBook: async book => {
      const { id, ...rest } = book;

      const mongodbBook = new Book({ _id: id, ...rest });

      try {
        await mongodbBook.save();

        return true;
      } catch (error) {
        if (
          typeof error === "object" &&
          error &&
          "code" in error &&
          typeof error.code === "number" &&
          error.code === 11000
        )
          return false;

        throw error;
      }
    },
    deleteBook: async id => {
      const result = await Book.findByIdAndDelete(id);

      return result ? 1 : 0;
    },
    getBook: async id => {
      const mongodbBook = await Book.findById(id);

      if (mongodbBook) {
        const { _id, authorId, name, price } = mongodbBook;

        return {
          id: _id,
          authorId,
          name,
          price
        };
      }

      return undefined;
    },
    getBooks: async () => {
      const mongodbBooks = await Book.find({});

      const books = mongodbBooks.map(({ _id, authorId, name, price }) => ({
        id: _id,
        authorId,
        name,
        price
      }));

      return books;
    },
    updateBook: async book => {
      const { id, ...rest } = book;

      const mongodbBook = new Book({ _id: id, ...rest });

      const result = await Book.findByIdAndUpdate(id, mongodbBook);

      return Boolean(result);
    }
  };

  await mongoose.connect(endpoint, { dbName });
  await onDbCreated(service);

  return service;
}

const BookSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    authorId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true }
  },
  { _id: false }
);

const Book = mongoose.model("Book", BookSchema);
