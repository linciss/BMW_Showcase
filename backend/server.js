import Express from 'express';
import cors from 'cors';
import data from './data/data.js';
import desc from './data/description.js';

const app = Express();
app.use(cors());

app.get('/api/models', (req, res) => {
  res.json(data);
});
app.get('/api/description', (req, res) => {
  res.json(desc);
});
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
