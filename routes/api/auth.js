const express = require('express');
const config = require('config');

const router = express.Router();

// @route     GET api/auth
// @desc      Test Route
// @access    Public

router.get('/', (req, res) => res.send('Login'));

module.exports = router;
