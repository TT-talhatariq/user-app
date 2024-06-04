const jwt = require("jsonwebtoken");

const protectRoute = async (req, res, next) => {
  try {
    const token = req?.cookies?.token;
    console.log(req.cookies);

    if (!token) {
      return res.status(401).json({ error: "Unauhtorized, No Token Provided" });
    }

    const decode = jwt.verify(token, "nkasjsdbhvfer3i28ruwjdbcd3er");

    if (!decode) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    console.log(decode);

    req.user = token.user;

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

module.exports = { protectRoute };
