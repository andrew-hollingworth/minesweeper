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
  scores: Sequelize.STRING,
}, {
  sequelize: db,
  modelName: 'highscores',
});

User.belongsToMany(Highscore, { through: 'users_highscores' });

module.exports = {
  db,
  User,
  Highscore,
};
