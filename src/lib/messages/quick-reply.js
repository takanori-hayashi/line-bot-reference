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
          text: 'メッセージ',
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