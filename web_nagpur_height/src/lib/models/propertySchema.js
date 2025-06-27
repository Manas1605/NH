import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  area: { type: String, required: true },
  price: { type: String },
  type: { type: String, required: true },
  images: { type: [String], default: [] },
  amenities: { type: String },
  info: { type: String },
  whatsapp: { type: String }
}, { timestamps: true });

export const Property = mongoose.models.propertySchema || mongoose.model('Property', propertySchema);
