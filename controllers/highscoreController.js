const express = require('express');
const { User, Highscore } = require('../models');

const highscoreController = express();

// Route for global scores
highscoreController.get('/global', async (req, res) => {
  try {
    const scores = await Highscore.findAll({
      limit: 10,
      order: [
        ['scores', 'DESC'],
      ],
    });
    res.json(scores);
  } catch (e) {
    console.log(e);
  }
});

highscoreController.get('/global/:userid/', async (req, res) => {
  try {
    const scores = await Highscore.findAll({
      where: { user_id: req.params.userid },
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
      where: { id: req.params.userid },
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
