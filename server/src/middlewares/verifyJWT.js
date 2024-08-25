const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.cookies['token'];

  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ authenticated: false, message: 'No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ authenticated: true, user: decoded });
  } catch (error) {
    res
      .status(401)
      .json({ authenticated: false, message: 'Invalid or expired token.' });
  }
};

module.exports = verifyJWT;
