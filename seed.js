const { User, Highscore } = require('./models');

const seed = async () => {
  try {
    const user1 = await User.create({
      username: 'ahollingworth',
      email: 'andrew.hollingworth@gmail.com',
      password: '1234',
    });
    const user2 = await User.create({
      username: 'drecheesecake',
      email: 'drelovescheesecake@aol.com',
      password: 'asdf',
    });

    const highscore1 = await Highscore.create({
      score: '0:00',
    });
    const highscore2 = await Highscore.create({
      score: '0:02',
    });
    const highscore3 = await Highscore.create({
      score: '0:01',
    });
    const highscore4 = await Highscore.create({
      score: '0:03',
    });

    await user1.setHighscores([highscore1, highscore2]);
    await user2.setHighscores([highscore3, highscore4]);
  } catch (e) {
    console.log(e);
  }
};

seed();
