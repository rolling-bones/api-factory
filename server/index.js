/* eslint-disable no-console */
require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json({ limit: '500kb' }));
app.use(express.urlencoded({ limit: '500kb', extended: true }));

app.get('/', (req, res) => {
  res.status(200).send(res);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
