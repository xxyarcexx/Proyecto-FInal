const express = require('express');
const router = express.Router();
const { login } = require('../controllers/login.controller');


// Ruta de login
router.post('/', login);

module.exports = router;