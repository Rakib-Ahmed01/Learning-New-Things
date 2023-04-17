const express = require('express');
const {
  loginController,
  registerController,
  refreshTokenController,
} = require('../controllers/auth.controller');
const router = express.Router();

router.route('/login').post(loginController);
router.route('/register').post(registerController);
router.route('/refresh-token').get(refreshTokenController);

module.exports = {
  authRoutes: router,
};
