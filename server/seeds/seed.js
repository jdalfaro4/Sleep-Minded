const db = require('../config/connection');
const { SleepInstance, User } = require('../models');
const userData = require('./userData.json');
const sleepInstanceData = require('./sleepInstanceData.json');



db.once("open", async () => {
  try {
    await SleepInstance.deleteMany({});
    await User.deleteMany({});
    const users = await User.create(userData);
    for (let i = 0; i < sleepInstanceData.length; i++) {
      for (let user of users) {
        let sleepInstance = {...sleepInstanceData[i]};
        sleepInstance.user_id = user._id;
        await SleepInstance.create(sleepInstance);
      }
    }
    console.log("Technologies seeded!");
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
});




