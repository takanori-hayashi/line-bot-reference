const line = require('@line/bot-sdk');
const config = require('../config');
const client = new line.Client(config);

// require messages
const emojis = require('./messages/emojis');
const sticker = require('./messages/sticker');
const iconDisplay = require('./messages/icon-display');
const replyImage = require('./messages/image');
const quickReply = require('./messages/quick-reply');
const locationMessage = require('./messages/location');
const video = require('./messages/video');
const audio = require('./messages/audio');

// require templates
const buttons = require('./messages/templates/buttons');

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
      return client.replyMessage(replyToken, iconDisplay);
    case '画像':
      return client.replyMessage(replyToken, replyImage);
    case 'クイック':
      return client.replyMessage(replyToken, quickReply);
    case '位置情報':
      return client.replyMessage(replyToken, locationMessage);
    case 'ビデオ':
      return client.replyMessage(replyToken, video);
    case 'オーディオ':
      return client.replyMessage(replyToken, audio);
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