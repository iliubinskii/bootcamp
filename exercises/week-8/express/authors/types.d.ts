import { Request, Response } from "express";

export interface Author {
  dateOfBirth: string;
  id: string;
  name: string;
}

export type Authors = Author[];

export interface AuthorsProvider {
  getAuthor: (id: string) => Promise<Author | undefined>;
  getAuthors: () => Promise<Authors>;
}

export interface AuthorControllers {
  getAuthor: (req: Request, res: Response) => Promise<void>;
  getAuthors: (req: Request, res: Response) => Promise<void>;
}
