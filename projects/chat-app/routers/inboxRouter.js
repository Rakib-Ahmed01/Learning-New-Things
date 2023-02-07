const { getInbox } = require('../controllers/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

const router = require('express').Router();

router.get('/', decorateHtmlResponse('Inbox - Chat Application'), getInbox);

module.exports = { inboxRouter: router };
