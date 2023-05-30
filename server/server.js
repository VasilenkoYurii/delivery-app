const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST =
  'mongodb+srv://yuravasilenko98:8O3aoi12zjvLNhOs@cluster0.oarorn8.mongodb.net/db-delivery?retryWrites=true&w=majority';
const PORT =
  'https://6476079736e9b1071c336880--spiffy-jelly-c5a04d.netlify.app';

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log('Database connection successful');
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
