const express = require('express');
const {
  loginController,
  registerController,
  refreshTokenController,
  logoutController,
} = require('../controllers/auth.controller');
const router = express.Router();

router.route('/login').post(loginController);
router.route('/register').post(registerController);
router.route('/refresh-token').get(refreshTokenController);
router.route('/logout').post(logoutController);

module.exports = {
  authRoutes: router,
};
