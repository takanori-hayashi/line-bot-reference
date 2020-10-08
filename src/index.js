require('dotenv').config();

// server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/assets'));

// line
const line = require('@line/bot-sdk');
const config = require('./config');
const handleEvent = require('./lib/handle-event');

// route:index
app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/webhook', line.middleware(config), (req, res) => {
  if (req.body.destination) {
    console.log("Destination User ID: " + req.body.destination);
  }

  console.log(`req.body.events => ${Array.isArray(req.body.events)}`);
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end(`no events.`);
  }

  Promise.all(req.body.events.map(handleEvent))
    .then(() => res.status(200).end())
    .catch(err => {
      console.error(err);
      res.status(500).end(`handler error.`);
    });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});