const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
  },
  fullName: {
    type: String,
  },
  age: Number,

  resetToken: String,

  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

// middleware
userSchema.pre("save", async function (doc, next) {
  doc.fullName = doc.firstName + " " + doc.lastName;

  next();
});

userSchema.post("save", async function (doc, next) {
  console.log("New user was created or updated", doc);
  next();
});

module.exports = mongoose.model("User", userSchema);
