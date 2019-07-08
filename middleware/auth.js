const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Check token from header
  const token = req.header('x-auth-token');

  // If no token exists

  if (!token) {
    return res.status(401).json({ msg: 'No token, Authorization Denied' });
  }

  // If token exists
  try {
    const decoded = jwt.verify(token, config.get('jwtToken'));
    req.user = decoded.user;
    next();
  } catch (err) {
    // If token is invalid / expired
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
