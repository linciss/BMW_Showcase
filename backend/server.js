import Express from 'express';
import cors from 'cors';
import data from './data/data.js';
import desc from './data/description.js';

const app = Express();
app.use(cors());

app.get('/api/models/:series', (req, res) => {
  const series = req.params.series;
  if (series === 'all') {
    res.json(data);
    return;
  }
  console.log(series);
  const filteredData = data.filter((model) => model.series === series);
  res.json(filteredData);
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
