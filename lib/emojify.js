const mojiTranslate = require('moji-translate')

function emojify (text, editMode, emojiLimit) {
  const matcher = /^\/([\w]+)\b *(.*)?$/m

  text = text.replace(matcher, '').replace(/(\r\n)+/, '')

  // If no config options passed in
  if (!editMode && !emojiLimit) {
    return mojiTranslate.translate(text)
  }

  if (editMode === 'replace' && emojiLimit === 0) {
    return mojiTranslate.translate(text)
  } else {
    var emojiCount = 0
    var newText = text.split(' ').map(function (str) {
      if (emojiLimit !== 0 && emojiCount > emojiLimit) {
        return str
      }

      var strippedStr = str.replace(/[.,:!]/g, '')
      var emojiForWord = mojiTranslate.getEmojiForWord(strippedStr)
      if (emojiForWord) {
        emojiCount += 1
        if (editMode === 'replace') {
          return emojiForWord
        } else {
          return str + ' ' + emojiForWord
        }
      } else {
        return str
      }
    }).join(' ')

    return newText
  }
}
module.exports = emojify
