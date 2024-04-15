import { Request, Response } from "express";

export interface Author {
  dateOfBirth: string;
  email: string;
  id: string;
  name: string;
}

export type Authors = Author[];

export interface AuthorsProvider {
  getAuthors: () => Promise<Authors>;
}

export interface AuthorControllers {
  getAuthors: (req: Request, res: Response) => Promise<void>;
}
