import 'dotenv/config';
import Express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Car } from './models/CarSchema.js';
import { Description } from './models/DescriptionSchema.js';
const PORT = process.env.PORT || 5000;
const app = Express();
app.use(cors());

app.get('/api/models', async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/description', async (req, res) => {
  try {
    const descriptions = await Description.find({});
    res.json(descriptions);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server listening on port 5000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
