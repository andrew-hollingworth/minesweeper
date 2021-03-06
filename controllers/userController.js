const express = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword } = require('../services/auth');

const userController = express();

const buildAuthResponse = ((user) => {
  const { id, username } = user;
  const tokenData = { id, username };
  const token = genToken(tokenData);
  return { user: { id, username }, token };
});

userController.post('/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await hashPassword(password);
    const user = await User.create({ username, email, password_digest });
    const responseData = buildAuthResponse(user);
    res.json(responseData);
  } catch (e) {
    next(e);
  }
});

userController.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username },
    });
    if (await checkPassword(password, user.password_digest)) {
      const responseData = buildAuthResponse(user);
      res.json(responseData);
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e) {
    next(e);
  }
});

module.exports = userController;
