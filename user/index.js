const log = require('../logger')(module)
const db = require('../db')

function User(name) {
  this.name = name
}

User.prototype.hello = function(who) {
  log(`${db.getPhrase('Hello')} ${who.name}`)
}

// console.log(module)

// module.exports = exports = this
module.exports = User
// exports.User = User
// global.User = User