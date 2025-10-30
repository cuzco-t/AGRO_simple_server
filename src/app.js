const express = require('express');
const routes = require('./routes');

const createApp = () => {
  const app = express();
  app.use(express.json());

  app.use('/api', routes);

  // health
  app.get('/', (req, res) => res.json({ status: 'ok' }));

  // 404
  app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  });

  return app;
};

module.exports = createApp;
