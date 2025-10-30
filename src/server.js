require('dotenv').config();
const createApp = require('./app');
const { sequelize, testConnection } = require('./models');

const PORT = process.env.PORT || 3000;

const start = async () => {
  const app = createApp();

  // Try to connect to DB immediately on start
  try {
    await testConnection();
    // sync models (safe in development; in production consider migrations)
    await sequelize.sync();
    console.log('Database synced');
  } catch (err) {
    console.error('Database connection failed:', err.message || err);
    console.warn('Server will continue to run without DB connection. Set DB env vars to enable DB.');
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

start();
