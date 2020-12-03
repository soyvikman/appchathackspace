const {userPost, userLogin} = require('./../controllers/User')
const express = require('express');
const router = express.Router();


router.route("/registro").post(userPost);
router.route("/login").post(userLogin);

module.exports = router;