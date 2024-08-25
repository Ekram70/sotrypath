const UsersModel = require('../models/UsersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registration = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: 'Bad request' });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: 'Password must be 8 or more characters long' });
  }

  try {
    // Check if the user already exists
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
      return;
    }

    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new UsersModel({ email, name, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    // Generate a JWT token for the user
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, name: newUser.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set the JWT in an HTTP-only secure cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 3600000,
    });

    // send the response
    return res.status(201).json({
      message: 'User created successfully',
      user: { email: newUser.email, name: newUser.name },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error creating user', error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Login failed' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set the JWT in an HTTP-only secure cookie
    res.cookie('token', token, {
      secure: true,
      sameSite: 'None',
      maxAge: 3600000,
    });

    // Send response
    return res.status(200).json({
      message: 'Login successful',
      user: { email: user.email, name: user.name },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error logging in user', error: err.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred during logout' });
  }
};

const getUser = async (req, res) => {
  const { email } = req.user;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await UsersModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({
      user: { email: user.email, name: user.name },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error retrieving user', error: err.message });
  }
};

module.exports = {
  registration,
  login,
  logout,
  getUser,
};
