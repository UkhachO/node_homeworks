import { Schema, model, Types } from 'mongoose';

const magazineSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    issueNumber: { type: Number, required: true, min: 1 },
    publisher: { type: Types.ObjectId, ref: 'publisher', required: true },
  },
  { versionKey: false, timestamps: true }
);

const Magazine = model('magazine', magazineSchema);
export default Magazine;
