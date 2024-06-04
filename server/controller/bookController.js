const Book = require("../models/BookModel");
const User = require("../models/userModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author");

    books.forEach((book) => {
      let authors = book.author.map((author) => author.username);
      book._doc.authors = authors; // _doc is used to access the raw document
      delete book._doc.author;
    });

    res.status(200).send(books);
  } catch (err) {
    res.status(400).json("Book not fetched");
  }
};

const addBook = async (req, res) => {
  try {
    const data = req.body;

    const book = await Book.create(data);

    // find user by id and update the book array
    const author = await User.findById(data.author[0]);
    author.books.push(book._id);
    await author.save();

    res.status(201).send(book);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = { getAllBooks, addBook };
