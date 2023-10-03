const mongoose = require('mongoose');

const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/task-manager';

mongoose.connect(mongodbUri)
  .then(() => console.info(`Successfully connected to the database ${mongodbUri}`))
  .catch(error => console.error(`An error trying to connect to the database ${mongodbUri}`))
