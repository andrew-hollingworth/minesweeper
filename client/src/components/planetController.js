const express = require('express');
const { Planet } = require('../models');

const planetController = express.Router();

planetController.get('/', async (req, res) => {
  try {
    const planet = await Planet.findAll();
    res.json(planet);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

planetController.post('/', async (req, res) => {
  try {
    const planet = await Planet.create(req.body);
    res.json(planet);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

planetController.put('/:id', async (req, res) => {
  try {
    const planet = await Planet.findByPk(req.params.id);
    await planet.update(req.body);
    res.json(planet);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

planetController.delete('/:id', async (req, res) => {
  try {
    const planet = await Planet.findByPk(req.params.id);
    await planet.destroy();
    res.json(planet);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = planetController;
