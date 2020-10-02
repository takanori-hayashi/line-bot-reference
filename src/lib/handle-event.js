const line = require('@line/bot-sdk');
const config = require('../config');
const client = new line.Client(config);

const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts.map(text => { type: 'text', text })
  );
};

const handleText = (message, replyToken, resource) => {
  switch (message) {
    default:
      return replyText(replyToken, message.text)
  }
};

const handleEvent = event => {
  const { replyToken, type } = event;
  console.log(`type: ${type}`);
  switch (type) {
    case 'text':
      const { message, resource } = event;
      return handleText(message, replyToken, resource);
  }
};

module.exports = handleEvent;