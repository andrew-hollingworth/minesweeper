const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'arcade_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

class User extends Sequelize.Model {}

User.init({
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'user',
});

class Highscore extends Sequelize.Model {}

Highscore.init({
  scores: Sequelize.INTEGER,
  rank: Sequelize.INTEGER,
}, {
  sequelize: db,
  modelName: 'highscores',
});

Highscore.belongsTo(User);
User.hasMany(Highscore);

module.exports = {
  db,
  User,
  Highscore,
};
