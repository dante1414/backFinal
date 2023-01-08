const express = require("express");
const path = require("path");
require("dotenv").config();
const morgan = require("morgan");
const { mongoose } = require("./db/conexion.js");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Rutas
app.use("/api", require("./routers/rutas.js"));

app.listen(port, () => {
  console.log(`corriendo en en port ${port}`);
});

