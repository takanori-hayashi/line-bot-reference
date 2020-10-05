const buttons = {
  type: 'template',
  altText: 'ボタン',
  template: {
    type: 'buttons',
    title: 'ボタンサンプル',
    text: 'ボタンをタップしてください',
    actions: [
      {
        label: '商品を見る',
        type: 'uri',
        uri: 'https://line.me/ja/',
      },
      {
        label: '購入する',
        // ポストバックイベントに使用
        type: 'postback',
        // webhookを通してpostback.dataプロパティで返される文字列
        // 最大300文字
        data: 'action=buy',
        // アクション実行時ユーザーのメッセージとして表示する文字列
        dispalyText: '商品を購入します',
      },
      {
        label: 'メッセージを送る',
        type: 'message',
        text: 'こんばんわ！元気ですか？',
      },
    ],
  }
};

module.exports = buttons;