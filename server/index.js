require('dotenv').config();
const path = require('path');
const express = require('express');
const utils = require('../utils');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json({ limit: '500kb' }));
app.use(express.urlencoded({ limit: '500kb', extended: true }));

app.get('/bob', (req, res) => {
  res.status(200).send('Hello from Express!');
});

app.listen(port, (err) => {
  if (err) throw new Error();
  utils.logger.info(`listening on port ${port}`);
});
