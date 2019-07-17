const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const chalk = require('chalk');
const User = require('../../models/User');
const auth = require("../../middleware/auth")

const router = express.Router();

// @route     POST api/register
// @desc      Register User
// @access    Public

router.post(
  '/',

  // 1: Express-Validator
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Invalid E-mail').isEmail(),
    check('password', 'Password must contain atleast (6) characters').isLength({
      min: 6,
    }),
    check("password2").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation field must match the password field");
      } else {
        return true;
      }
    })
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // 2: Check if User Already Exists

    const { name, email, password } = req.body;
    console.log(req.body);
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      // 3. Create New User

      user = new User({
        name,
        email,
        password,
      });

      // 4. Encrypt Password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // 5. Save User to DB

      await user.save();

      // 6. Send Confirmation E-mail to New User!

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'codementorcenter@gmail.com',
          pass: config.get('emailPass'),
        },
      });

      const mailOptions = {
        from: 'CodeMentorCenter@gmail.com',
        to: email,
        subject: 'Welcome to CodeMentorCenter!',
        text: 'Welcome to CodeMentorCenter! More to come soon...',
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });

      // 7. Return Token

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        {
          expiresIn: 200000,
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

// @route PUT api/register/updatepassword
// @desc Update Password
// @access private
router.put(
  "/updatepassword",
  [
    auth,
    [
      check(
        "password",
        "Password must contain atleast (6) characters"
      ).isLength({
        min: 6
      }),
      check("password2").custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error(
            "Password confirmation field must match the password field"
          );
        } else {
          return true;
        }
      })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {

      let password = req.body.password;
      let newPassword = {};

      // 4. Encrypt Password
      const salt = await bcrypt.genSalt(10);
      newPassword.password = await bcrypt.hash(password, salt);

      user = await User.findOneAndUpdate(
        {
          _id: req.user.id
        },
        {
          $set: newPassword
        },
        {
          new: true
        }
      );
      return res.json({
        msg: "Password Updated"
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
