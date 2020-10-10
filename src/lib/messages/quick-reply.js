const quickReply = {
  quickReply: {
    items: [
      // {
      //   type: 'action',
      //   action: {
      //     type: 'message',
      //     label: 'メッセージ',
      //     text: 'メッセージ',
      //   },
      // },
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