const line = require('@line/bot-sdk');
const config = require('../config');
const client = new line.Client(config);

const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  console.log(`texts: ${texts}`);
  return client.replyMessage(
    token,
    texts.map(text => { type: 'text', text })
  );
};

const handleText = (message, replyToken, resource) => {
  const { text } = message;
  switch (text) {
    default:
      return replyText(replyToken, text)
  }
};

const handleEvent = event => {
  const { replyToken, type } = event;
  console.log(`event-type: ${type}`);
  switch (type) {
    case 'message':
      const { message, resource } = event;
      return handleText(message, replyToken, resource);
  }
};

module.exports = handleEvent;