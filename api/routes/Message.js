const {messages} = require('./../controllers/Messages')
const express = require('express');
const router = express.Router();

router.route("/").get(messages);

module.exports = router;