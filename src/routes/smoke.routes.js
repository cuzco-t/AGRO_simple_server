const express = require('express');
const { createSmoke } = require('../controllers/smoke.controller');

const router = express.Router();

// POST /api/smoke
router.post('/', createSmoke);

module.exports = router;
