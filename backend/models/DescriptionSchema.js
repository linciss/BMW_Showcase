import mongoose from 'mongoose';

const descriptionSchema = new mongoose.Schema({
  id: Number,
  bg: String,
  fg: String,
  series: String,
  text: String,
});

export const Description = mongoose.model(
  'Description',
  descriptionSchema,
  'description'
);
