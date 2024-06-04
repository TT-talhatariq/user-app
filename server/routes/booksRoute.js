const express = require("express");

const { getAllBooks, addBook } = require("../controller/bookController");

const router = express.Router();

router.get("/all", getAllBooks);

router.post("/add", addBook);

module.exports = router;
