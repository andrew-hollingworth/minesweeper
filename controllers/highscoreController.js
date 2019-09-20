const express = require('express');
const { User, Highscore } = require('../models');

const highscoreController = express();

// Route for global scores

highscoreController.get('/global/user', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.log(e);
  }
});

highscoreController.get('/global/', async (req, res) => {
  try {
    const scores = await Highscore.findAll({
      limit: 10,
      order: [
        ['rank', 'ASC'],
      ],
    });
    res.json(scores);
  } catch (e) {
    console.log(e);
  }
});

highscoreController.put('/global', async (req, res) => {
  try {
    const update = await Highscore.findAll({
      order: [
        ['scores', 'ASC'],
      ],
    });
    update.forEach(async (score, index) => {
      await score.update({ rank: index + 1 });
    });

    res.json(update);
  } catch (e) {
    console.log(e);
  }
});

highscoreController.get('/global/:userid/', async (req, res) => {
  try {
    const scores = await User.findAll({
      where: { username: req.params.userid },
      include: [Highscore],
    });
    const sortScores = scores.sort((a, b) => b.dataValues.scores - a.dataValues.scores);
    res.json(sortScores[0]);
  } catch (e) {
    console.log(e);
  }
});

// Route for user scores

highscoreController.get('/users/:userid', async (req, res) => {
  try {
    const scores = await User.findAll({
      where: { username: req.params.userid },
      include: [Highscore],
    });
    res.json(scores);
  } catch (e) {
    console.log(e);
  }
});

highscoreController.post('/users/:id', async (req, res) => {
  try {
    const scores = await Highscore.create(req.body);
    const user = await User.findByPk(req.params.id);
    scores.setUser(user);
    res.json(scores);
  } catch (e) {
    console.log(e);
  }
});

highscoreController.delete('/scores/:scoreid', async (req, res) => {
  try {
    const scores = await Highscore.findByPk(req.params.scoreid);
    await scores.destroy();
    res.json(scores);
  } catch (e) {
    console.log(e);
  }
});

highscoreController.get('/users/:userid/times', async (req, res) => {
  try {
    const times = await Highscore.findAll({
      where: { user_id: req.params.userid },
    });
    res.json(times[times.length - 1]);
  } catch (e) {
    console.log(e);
  }
});


module.exports = highscoreController;
