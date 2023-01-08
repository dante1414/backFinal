const mongoose = require('mongoose');
require('dotenv').config();


const conexion = process.env.DBCONECTION;

mongoose.set("strictQuery", false);
mongoose.connect(conexion)
  .then(db => console.log(`connect ${db.connection.name}`))
  .catch(error => console.error(error));

module.exports = mongoose;