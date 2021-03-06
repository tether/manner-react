/**
 * Dependencies.
 */

const next = require('next')
const salute = require('salute')
const parse = require('url').parse


/**
 * Create a nextjs app as a manner service.
 *
 * @param {String} dir
 * @return {Function}
 * @api public
 */

module.exports = function (dir) {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: dir || '.'
  })
  const router = app.getRequestHandler()
  const environment = app.prepare()
  return salute((req, res) => {
    return environment.then(() => {
      return router(req, res, parse(req.url, true))
    })
  })
}
