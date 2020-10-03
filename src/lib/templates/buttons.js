const buttons = {
  type: 'template',
  altText: 'ボタン',
  template: {
    type: 'buttons',
    title: 'ボタンサンプル',
    text: 'ボタンをタップしてください',
    actions: [
      {
        label: 'LINE アプリ',
        type: 'uri',
        uri: 'https://line.me/ja/',
      },
      {
        label: 'あなたに返信する',
        type: 'postback',
        data: 'こんにちは！ボタンを押してくれてありがとうございます！',
      },
      {
        label: 'あなたにメッセージを送る',
        type: 'message',
        text: 'こんばんわ！元気ですか？',
      },
    ],
  }
};

module.exports = buttons;