/**
 * テキストメッセージ（絵文字）
 * https://developers.line.biz/ja/reference/messaging-api/#text-message
 * 
 * 絵文字リスト
 * https://d.line-scdn.net/r/devcenter/sendable_line_emoji_list.pdf
 */

module.exports = {
  type: 'text',
  text: '$ おすし $',
  emojis: [
    {
      index: 0,
      productId: '5ac1de17040ab15980c9b438',
      emojiId: '025',
    },
    {
      index: 6,
      productId: '5ac1bfd5040ab15980c9b435',
      emojiId: '094',
    },
  ],
};