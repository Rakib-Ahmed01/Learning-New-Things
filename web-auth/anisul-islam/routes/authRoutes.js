const {
  loginController,
  registerController,
} = require('../controller/authController');

const app = require('express');
const router = app.Router();

router.route('/login').post(loginController);
router.route('/register').post(registerController);

module.exports = {
  authRoutes: router,
};
