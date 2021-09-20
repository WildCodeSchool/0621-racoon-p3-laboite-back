// Import router: const myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const contactRouter = require('./contact')

const setupRoutes = app => {
  // add your middware route: app.use('/myUrl', myRouter)
  app.use('/concept', conceptRouter)
  app.use('/contact', contactRouter)
}

module.exports = { setupRoutes }
