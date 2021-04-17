// Iteration #1
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const droneMod = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const Drone = mongoose.model("Drone", droneMod)

module.exports = Drone;