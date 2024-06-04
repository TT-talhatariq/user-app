const Book = require("./models/BookModel");
const User = require("./models/userModel");

const express = require("express");
const data = require("./data");

async function addBooks() {
  try {
    await Book.deleteMany();
    // await Book.insertMany(data);

    //loop through the data and insert one by one

    for (let i = 0; i < data.length; i++) {
      let names = [];
      // fetch the author id
      const author = await User.findById(data[i].author[0]);
      // grab the name of author

      names.push(author.username);

      data[i].names = names;

      await Book.create(data[i]);
    }

    console.log("Books added successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = addBooks;
