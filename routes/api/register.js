const express = require('express');
const config = require('config');

const router = express.Router();

// @route     POST api/users
// @desc      Register User
// @access    Public

router.post('/', (req, res) => res.send('Register'));

module.exports = router;
