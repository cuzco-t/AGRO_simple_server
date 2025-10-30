const smokeService = require('../services/smoke.service');

const createSmoke = async (req, res, next) => {
  try {
    const payload = req.body;
    const created = await smokeService.create(payload);
    res.status(201).json(created);
  } catch (err) {
    // business errors -> 400
    res.status(400).json({ error: err.message || 'Invalid input' });
  }
};

module.exports = { createSmoke };
