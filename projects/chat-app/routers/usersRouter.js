const { getUsers } = require('../controllers/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = require('express').Router();

router.get('/', decorateHtmlResponse('Users - Chat Application'), getUsers);

module.exports = { usersRouter: router };
