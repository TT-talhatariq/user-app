const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const booksRoutes = require("./routes/booksRoute");

const rateLimit = require("express-rate-limit");

const addBooks = require("./bookScrit.js");

const cookieParser = require("cookie-parser");

const app = express();
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  limit: 100,
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(limiter);

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3001", // Adjust the origin as needed
    credentials: true, // This allows cookies to be sent
  })
);
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://yesdreamer17:GfeLPeb87kqjoece@cluster0.pz7aqai.mongodb.net/food"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// application level
app.use((req, res, next) => {
  console.log("Middleware Executed");
  // implement logic to check if user is authenticated or request have not any bad thing
  // if(threats){
  //   return
  // }
  next();
});

// API Request
app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/books", booksRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});

app.listen(8080, () => {
  console.log("Server Started");
});
