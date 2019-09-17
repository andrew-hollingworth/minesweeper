const { db } = require('./models');

const resetDb = async () => {
  try {
    await db.sync({ force: true });
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
};

resetDb();
