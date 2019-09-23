// const log = require('logger')(module)

module.exports = (module) => (...arguments) => {
    const args = [module.filename].concat(...arguments)
    console.log.apply(console, args)
  }