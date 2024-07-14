const express = require('express');
const router = express.Router();
const AuthController = require("./controller/AuthController");

router.post('/auth/signup', AuthController.signup);

module.exports = router;