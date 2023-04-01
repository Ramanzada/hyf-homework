const express = require("express");
const router = express.Router();
const knex = require("./database");

router.use("/meals", mealsRouter);

router.get("/future-meals", async (req, res) => {
  try {
    const meals = await knex("meal").where("when", ">", new Date());
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Error fetching future meals" });
  }
});

router.get("/past-meals", async (req, res) => {
  try {
    const meals = await knex("meal").where("when", "<", new Date());
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Error fetching past meals" });
  }
});

router.get("/all-meals", async (req, res) => {
  try {
    const meals = await knex("meal").orderBy("id");
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Error fetching all meals" });
  }
});

router.get("/first-meal", async (req, res) => {
  try {
    const meal = await knex("meal").orderBy("id", "asc").first();
    if (meal) {
      res.json(meal);
    } else {
      res.status(404).json({ error: "No meals found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching first meal" });
  }
});

router.get("/last-meal", async (req, res) => {
  try {
    const meal = await knex("meal").orderBy("id", "desc").first();
    if (meal) {
      res.json(meal);
    } else {
      res.status(404).json({ error: "No meals found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching last meal" });
  }
});

module.exports = router;
