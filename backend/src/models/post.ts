import { Document, Schema, model } from 'mongoose';

interface Post extends Document {
  title: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  userId: Schema.Types.ObjectId;
}

const postSchema = new Schema<Post>({
  title: String,
  content: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model<Post>('Post', postSchema);
