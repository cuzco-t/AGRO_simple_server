const { models } = require('../models');

class SmokeService {
  constructor() {
    if (!models || !models.Smoke) {
      throw new Error('Smoke model not initialized. Ensure DB env vars are set and connected.');
    }
    this.Smoke = models.Smoke;
  }

  async create(data) {
    // minimal validation
    const { value } = data;
    if (value === undefined || value === null) throw new Error('value is required');

    const created = await this.Smoke.create({ value });
    return created.toJSON();
  }
}

module.exports = new SmokeService();
