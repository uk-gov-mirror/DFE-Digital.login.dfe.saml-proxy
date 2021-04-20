const healthRouter = require('./controller/health');

module.exports = (app) => {
  app.use('/info', healthRouter);
  return app;
};
