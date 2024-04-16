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
  updateBook: (book: Book) => Promise<boolean>;
  getBooks: () => Promise<Books>;
}

export interface BookControllers {
  addBook: (req: Request, res: Response) => Promise<void>;
  updateBook: (req: Request, res: Response) => Promise<void>;
  getBooks: (req: Request, res: Response) => Promise<void>;
}
