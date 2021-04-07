const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();
router.get('/',userController.registerUser);
module.exports = router;
