const line = require('@line/bot-sdk');
const config = require('../config');
const client = new line.Client(config);

// require templates
const buttons = require('./messages/templates/buttons');
const emojis = require('./messages/emojis');
const sticker = require('./messages/sticker');

const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  console.log(`texts: ${texts}`);
  return client.replyMessage(
    token,
    texts.map(text => ({ type: 'text', text }))
  );
};

const handleText = (message, replyToken, resource) => {
  const { text } = message;
  switch (text) {
    case 'ボタン':
      return client.replyMessage(replyToken, buttons);
    case '絵文字':
      return client.replyMessage(replyToken, emojis);
    case 'スタンプ':
      return client.replyMessage(replyToken, sticker);
    case 'アイコン':
      return client.replyMessage(replyToken, iconDisplay)
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