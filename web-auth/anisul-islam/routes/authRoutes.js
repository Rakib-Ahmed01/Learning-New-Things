const {
  loginController,
  registerController,
  refreshTokenController,
  logout,
} = require('../controller/authController');

const app = require('express');
const router = app.Router();

router.route('/login').post(loginController);
router.route('/register').post(registerController);
router.route('/refresh-token').post(refreshTokenController);
router.route('/logout').post(logout);

module.exports = {
  authRoutes: router,
};
