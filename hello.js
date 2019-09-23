const user = require('./user')

const john = new user.User('John')
const mike = new user.User('Mike')

john.hello(mike)