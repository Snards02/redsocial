import { Document, Schema, model } from 'mongoose';

interface User extends Document {
  fullName: string;
  age: number;
  email: string;
  password: string;
  posts: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

const userSchema = new Schema<User>({
  fullName: String,
  age: Number,
  email: String,
  password: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

export default model<User>('User', userSchema);