const express = require('express');
const router = express.Router();
const DroneMod = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneMod.find()
  .then((data) => {
    res.render("drones/list.hbs", {
       drones: data
     })
    })
  .catch((err) =>{ next(err) })
})


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  console.log(req.body)
  DroneMod.create(req.body)
  .then(() => {
    res.redirect('/drones')
  })
  .catch((err) => {
   res.render('/drones/create')
   console.log(err)
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
