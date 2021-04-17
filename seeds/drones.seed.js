// Iteration #1
const mongoose = require("mongoose");
const DroneMod = require('../models/Drone.model')

require('../db/index')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  DroneMod.create(drones)
  .then((listOfDrones) => {
      console.log(`${listOfDrones.length} were created`)
      mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err)
  })