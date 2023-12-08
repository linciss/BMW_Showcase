import Express from 'express';
import { data } from './data/data.js';
const app = Express();

app.get('/api', (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
