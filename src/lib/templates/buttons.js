const buttos = {
  type: 'template',
  altText: 'ボタン',
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
      uri: 'こんにちは！ボタンを押してくれてありがとうございます！',
    },
    {
      label: 'あなたにメッセージを送る',
      type: 'postback',
      uri: 'こんにちは！ボタンを押してくれてありがとうございます！',
    },
  ],
};

module.exports