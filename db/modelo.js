const mongoose = require("mongoose");
const { Schema } = mongoose;

const tablaTareas = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tarea", tablaTareas);
