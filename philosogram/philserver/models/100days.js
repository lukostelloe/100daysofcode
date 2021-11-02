const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  done: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
});

const sum = mongoose.model("100days", mySchema);
module.exports = sum;
