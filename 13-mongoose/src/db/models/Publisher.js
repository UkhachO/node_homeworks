import { Schema, model } from 'mongoose';

const publisherSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

publisherSchema.virtual('magazines', {
  ref: 'magazine',
  localField: '_id',
  foreignField: 'publisher',
});

const Publisher = model('publisher', publisherSchema);
export default Publisher;
