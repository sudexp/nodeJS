let phrases

exports.connect = () => {
  phrases = require('./ru')
}

exports.getPhrase = (name) => {
  if (!phrases[name]) {
    throw Error(`No this phrase: ${name}`)
  }
  return phrases[name]
}