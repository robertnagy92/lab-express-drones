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
  .catch((err) =>{ console.log(err) })
})


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
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
  DroneMod.findById(req.params.id)
  .then((data) => {
    res.render('drones/update-form.hbs', {data})
  })
  .catch((err) => {
    console.log(err)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneMod.findByIdAndUpdate(req.params.id, req.body)
  .then(() =>{
    res.redirect('/drones')
  })
  .catch((err) => {
    res.render("drones/update-form.hbs", err)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
DroneMod.findByIdAndDelete(req.params.id)
.then(() => {
  res.redirect('/drones')
})
.catch((err) => {
  console.log(err)
})
});

module.exports = router;
