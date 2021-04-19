const { Router } = require('express');

const healthRouter = Router();

healthRouter.route('/health')
  .get(async (req, res) => {
    res.status(200)
      .send({ status: 'online' });
  });

module.exports = healthRouter;
