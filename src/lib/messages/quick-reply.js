const quickReply = {
  type: 'text',
  text: 'クイックリプライのサンプルです！',
  // テキストメッセージにquickReplyを追加
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'message',
          label: 'メッセージ',
          text: 'クイックメッセージ！',
        },
      },
      {
        type: 'action',
        action: {
          type: 'camera',
          label: 'カメラ'
        },
      },
    ],
  }
};

module.exports = quickReply;