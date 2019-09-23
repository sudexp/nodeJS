const db = require('./db')
db.connect()

const User = require('./user')

const run = () => {
  const john = new User('John')
  const mike = new User('Mike')

  john.hello(mike)
  console.log(db.getPhrase("Run successful"))
}


if (module.parent) {
  exports.run = run
} else {
  run()
}