const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:id', (req, res) => {
  res.send(`Param id: ${req?.params.id} \n\n query string: ${req?.query?.slug}`);
});

app.post('/', (req, res) => {
  res.json(req?.body || {});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

