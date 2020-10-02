require('dotenv').config();

// server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use('/assets', express.static('assets'));

// line
const line = require('@line/bot-sdk');
const config = require('./config');
const client = new line.Client(config);

// route:index
app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/webhook', line.middleware(config), (req, res) => {
  res.sendStatus(200).send('OK');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});