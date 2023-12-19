import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  mark: String,
  series: String,
  model: String,
  year: String,
  engine: [String],
  transmission: [String],
  bodyStyle: [String],
  slug: String,
  description: String,
  image: String,
});

export const Car = mongoose.model('Car', carSchema, 'cars');
