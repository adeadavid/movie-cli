const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  category: String,
  producer: String,
  year: String,
});

module.exports = mongoose.model("Movies", movieSchema);
