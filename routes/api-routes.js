const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
        console.log(data);
      }
    }
  );
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create({ body }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
      console.log(data);
    }
  }).limit(5);
});

module.exports = router;
