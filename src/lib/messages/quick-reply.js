const quickReply = {
  type: 'quickReply',
  items: [
    {
      type: 'action',
      action: {
        type: 'message',
        label: 'メッセージ',
        text: 'メッセージ',
      },
    }
  ],
};

module.exports = quickReply;