const { Sequelize } = require('sequelize');
const SmokeModel = require('./smoke.model');

const initSequelize = () => {
  const {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
  } = process.env;

  if (!DB_HOST || !DB_NAME || !DB_USER) {
    // Return null sequelize; consumer should handle absence
    return { sequelize: null, models: {} };
  }

  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // importante para Supabase
      },
    },
    logging: false,
  });

  const models = {
    Smoke: SmokeModel(sequelize),
  };

  return { sequelize, models };
};

const { sequelize, models } = initSequelize();

const testConnection = async () => {
  if (!sequelize) throw new Error('Database environment variables not provided');
  await sequelize.authenticate();
  console.log('Connected to Postgres');
};

module.exports = { sequelize, models, testConnection };
