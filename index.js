const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/movie-cli", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Movies = require("./models/movies");

const addMovie = async (item) => {
  try {
    const movie = await new Movies(item).save();
    console.info(`Added ${movie.title} to database`);
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

const listMovies = async () => {
  try {
    const allMovies = await Movies.find();
    console.info(allMovies, `${allMovies.length} movies`);
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

const findMovie = async (id) => {
  try {
    const movie = await Movies.findById(id);
    console.info(movie);
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

const deleteMovie = async (id) => {
  try {
    const movie = await Movies.findByIdAndDelete(id);
    console.info(`deleted ${movie.title}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

const updateMovie = async (id, item) => {
  try {
    const movie = await Movies.findByIdAndUpdate(id, item);
    console.info(`updated ${movie.title}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

// // Update Customer
// const updateCustomer = (_id, customer) => {
//   Movies.update({ _id }, customer).then((customer) => {
//     console.info("Customer Updated");
//     db.close();
//   });
// };

// Export All Methods
module.exports = {
  addMovie,
  listMovies,
  findMovie,
  deleteMovie,
  updateMovie,
};
