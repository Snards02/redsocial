import { User } from "./user.model";

export class Post {
    id!: string;
    title!: string;
    content!: string;
    likes!: number;
    createdAt!: Date;
    updatedAt!: Date;
    userId!: string
  }