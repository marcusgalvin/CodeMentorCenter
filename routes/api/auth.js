const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

const router = express.Router();

// @route     GET api/auth
// @desc      Test Route
// @access    Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/auth
// @desc      Authenticate user and get token
// @access    Public
router.post(
  '/',

  // 1. Express-Validator

  [
    check('email', 'Invalid E-mail').isEmail(),
    check('password', 'Password is required').exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // 2: Check if User Already Exists

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      // 3. If User Exists

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // 4. Payload / Webtoken

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
