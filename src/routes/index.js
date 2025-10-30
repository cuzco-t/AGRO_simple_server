const express = require('express');
const smokeRoutes = require('./smoke.routes');

const router = express.Router();

router.use('/smoke', smokeRoutes);

module.exports = router;
