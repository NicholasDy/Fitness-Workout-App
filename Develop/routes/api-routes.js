const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout");


router.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, data) => {
        if (err) {
            console.log(err);
          } else {
            res.json(data);
            console.log(data)
          }
    })
});

router.get("/api/worokouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({}, (err, found) => {

    })
});

module.exports = router;
