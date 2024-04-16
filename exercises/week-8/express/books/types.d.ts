import { Request, Response } from "express";

export interface Book {
  authorId: string;
  id: string;
  name: string;
  price: string;
}

export type Books = Book[];

export interface BooksService {
  addBook: (book: Book) => Promise<boolean>;
  deleteBook: (id: string) => Promise<number>;
  updateBook: (book: Book) => Promise<boolean>;
  getBook: (id: string) => Promise<Book | undefined>;
  getBooks: () => Promise<Books>;
}

export interface BookControllers {
  addBook: (req: Request, res: Response) => Promise<void>;
  deleteBook: (req: Request, res: Response) => Promise<void>;
  updateBook: (req: Request, res: Response) => Promise<void>;
  getBook: (req: Request, res: Response) => Promise<void>;
  getBooks: (req: Request, res: Response) => Promise<void>;
}
