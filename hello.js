const User = require('./user')

const run = () => {
  const john = new User('John')
  const mike = new User('Mike')

  john.hello(mike)
}


if (module.parent) {
  exports.run = run
} else {
  run()
}