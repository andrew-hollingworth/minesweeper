const Sequelize = require('sequelize');

const db = new Sequelize(
  (process.env.DATABASE_URL || 'postgres://localhost:5432/arcade_db'),
  {
<<<<<<< HEAD
    database: 'arcade_db',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
=======
  database: 'arcade_db',
  dialect: 'postgres',
  define: {
    underscored: true,
>>>>>>> 63fce4c69b463cd3c56ae2c013e77dba1628d253
  },
);

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
