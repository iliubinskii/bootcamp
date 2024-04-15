import { Request, Response } from "express";

export interface Book {
  authorId: string;
  id: string;
  name: string;
  price: string;
}

export type Books = Book[];

export interface BooksProvider {
  getBooks: () => Promise<Books>;
}

export interface BookControllers {
  getBooks: (req: Request, res: Response) => Promise<void>;
}
