const db = require('../db')

function User(name) {
  this.name = name
}

User.prototype.hello = function(who) {
  console.log(`${db.getPhrase('Hello')} ${who.name}`)
}

console.log(module)

// module.exports = exports = this
module.exports = User
// exports.User = User
// global.User = User