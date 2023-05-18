const db = require('../config/connection');
const { Duration,Quality } = require('../models');

const techData = require('./sleepData.json');
const techData2 = require('./qualityData.json');

db.once('open', async () => {
  await Duration.deleteMany({});
  await Quality.deleteMany({});

  const technologies = await Duration.insertMany(techData);

  const technologies2 = await Quality.insertMany(techData2);

  console.log('Technologies seeded!');
  process.exit(0);
});
