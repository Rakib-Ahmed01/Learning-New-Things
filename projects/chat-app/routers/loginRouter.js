const { getLogin } = require('../controllers/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = require('express').Router();

router.get('/', decorateHtmlResponse('Login - Chat Application'), getLogin);

module.exports = { loginRouter: router };
