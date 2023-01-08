const express = require("express");
const router = express.Router();
const Tarea = require("../db/modelo.js");

router.get("/", async (req, res) => {
  const tarea = await Tarea.find();
  res.json(tarea);
});

router.get("/:id", async (req, res) => {
  const tarea = await Tarea.findById(req.params.id);
  res.json(tarea);
});

router.post("/agregar", async (req, res) => {
  const { titulo, descripcion } = req.body;
  const tarea = new Tarea({ titulo, descripcion });
  await tarea.save();
  res.json({ status: "Tarea guardada" });
});

router.put("/:id", async (req, res) => {
  const { titulo, descripcion, done } = req.body;
  const newTarea = { titulo, descripcion, done };
  await Tarea.findByIdAndUpdate(req.params.id, newTarea);
  res.json({ status: "Tarea modificada" });
});

router.delete("/:id", async (req, res) => {
  await Tarea.findByIdAndRemove(req.params.id);
  res.json({ status: "Tarea eliminada" });
});

module.exports = router;
