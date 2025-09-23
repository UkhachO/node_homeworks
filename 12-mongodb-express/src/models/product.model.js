import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, default: '', trim: true },
  },
  { timestamps: true }
);

const Product = model('Product', productSchema);
export default Product;
