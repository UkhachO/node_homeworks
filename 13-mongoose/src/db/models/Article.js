import { Schema, model, Types } from 'mongoose';

const articleSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    tags: [{ type: Types.ObjectId, ref: 'tag' }],
  },
  { versionKey: false, timestamps: true }
);

const Article = model('article', articleSchema);
export default Article;
