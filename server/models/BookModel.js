const mongoose = require("mongoose");

const BookModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  author: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  names: {
    type: Array,
  },
});

module.exports = mongoose.model("Book", BookModel);
