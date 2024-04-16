import zod from "zod";

const newBookProps = {
  authorId: zod.string().min(1, "Author ID is required"),
  name: zod.string().min(1, "Name is required"),
  price: zod.string().min(1, "Price is required")
};

export const NewBookSchema = zod.object(newBookProps);

const existingBookProps = {
  id: zod.string().min(1, "ID is required"),
  ...newBookProps
};

export const ExistingBookSchema = zod.object(existingBookProps);
