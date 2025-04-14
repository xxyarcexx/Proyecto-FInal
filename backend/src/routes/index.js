const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routers');
// Import other routes

router.use('/auth', authRoutes);
// Use other routes

module.exports = router;