import { Schema, model, Types } from 'mongoose';

const tagSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    articles: [{ type: Types.ObjectId, ref: 'article' }],
  },
  { versionKey: false, timestamps: true }
);

const Tag = model('tag', tagSchema);
export default Tag;
