const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST =
  'mongodb+srv://yuravasilenko98:8O3aoi12zjvLNhOs@cluster0.oarorn8.mongodb.net/db-delivery?retryWrites=true&w=majority';
const PORT = 'https://delivery-app-test.herokuapp.com/';

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
