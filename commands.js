#!/usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");
const {
  addMovie,
  listMovies,
  findMovie,
  deleteMovie,
  updateMovie,
} = require("./index");

// Customer Questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "title",
  },
  {
    type: "list",
    name: "category",
    message: "select category",
    choices: ["Action", "Cartoon", "Drama"],
  },
  {
    type: "input",
    name: "producer",
    message: "producer",
  },
  {
    type: "input",
    name: "year",
    message: "released year",
  },
];

program.version("1.0.0").description("Movie Management System");

program
  .command("add")
  .alias("a")
  .description("Add a movie")
  .action(() => {
    prompt(questions).then((answers) => addMovie(answers));
  });

program
  .command("list")
  .alias("l")
  .description("List all movies")
  .action(listMovies);

program
  .command("find")
  .alias("f")
  .arguments("<movie_id>")
  .description("Find a movie")
  .action((movie_id) => findMovie(movie_id));

program
  .command("delete")
  .alias("d")
  .arguments("<movie_id>")
  .description("Delete a movie")
  .action((movie_id) => deleteMovie(movie_id));

program
  .command("update")
  .alias("u")
  .arguments("<movie_id>")
  .description("Update a movie")
  .action((movie_id) => {
    console.log(program.args);
    prompt(questions).then((answers) => updateMovie(movie_id, answers));
  });

program.parse(process.argv);
