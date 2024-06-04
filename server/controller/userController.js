const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const sendEmail = require("../utils/email");
const { emailRegister, emailForget } = require("../utils/emailHtml");

const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// Login Request
const login = async (req, res) => {
  try {
    // 1. get data
    const data = req.body;
    // 2. verify
    const doExist = await User.findOne({ email: data.email });

    const isMatch = await bcrypt.compare(data.password, doExist.password);
    //

    if (doExist && isMatch) {
      // create token here for validation of user next time

      const token = jwt.sign(
        {
          user: doExist,
        },
        "nkasjsdbhvfer3i28ruwjdbcd3er",
        {
          expiresIn: "7d",
        }
      );

      console.log(token);

      res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
      });

      res.status(201).json({
        message: "Login Done",
        token,
      });
    } else {
      res.status(404).json({
        error: "Email or Password is Incorrect!",
      });
    }

    // 3. send result
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  try {
    // 1. access data of client
    const data = req.body;
    const date = req.body.dateJoining;
    // 2. match passwords
    if (data.password != data.passwordConfirm) {
      res.status(404).json({
        error: "Password do not match",
      });
      return;
    }

    // 3. check if user already exists
    // const doExist = await User.findOne({ email: data.email });
    // if (doExist) {
    //   res.status(404).json({
    //     error: "User already exists",
    //   });
    //   return;
    // }

    // encryption
    const hashedPwd = await bcrypt.hash(data.password, 12);
    data.password = hashedPwd;

    // 4. if not, create a new user
    const newUser = await User.create(data);

    const options = {
      email: data.email,
      subject: "Welcome to Shop With Ease",
      text: "hello",
      html: emailRegister(data.username),
    };

    await sendEmail(options);

    // 5. send response back
    res.status(201).json({
      error: "User created successfully",
      data: newUser,
    });
    return;
  } catch (err) {
    next(err);
  }
};

const forgetPassword = async (req, res) => {
  try {
    // 1. access data of client
    const email = req.body.email;
    console.log(email);

    // send email to this one for forget password
    // 3. check if user already exists
    const doExist = await User.findOne({ email: email });
    if (!doExist) {
      res.status(404).json({
        error: "No account against this Email",
      });
      return;
    }

    // sent email with token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const secureResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    doExist.resetToken = secureResetToken;
    await doExist.save();

    const options = {
      email: email,
      subject: "Reset Password Link",
      text: "reset",
      html: emailForget("http://localhost:3000/reset/" + secureResetToken),
    };

    await sendEmail(options);

    // 5. send response back
    res.status(201).json({
      message: "Reset Email Sent Successfully!",
      secureResetToken,
    });

    return;
  } catch (err) {
    next(err);
  }
};

const restPassword = async (req, res) => {
  try {
    //1. verify user token
    const userResetToken = req.params.token;

    const doExist = await User.findOne({ resetToken: userResetToken });
    if (!doExist) {
      res.status(404).json({
        error: "Invalid Token",
      });
      return;
    }

    // if user ticket match
    // encryption
    const hashedPwd = await bcrypt.hash(req.body.password, 12);
    doExist.password = hashedPwd;

    doExist.resetToken = undefined;
    await doExist.save();

    // const options = {
    //   email: email,
    //   subject: "Reset Password Link",
    //   text: "reset",
    //   html: emailForget(),
    // };

    // await sendEmail(options);

    // 5. send response back
    res.status(201).json({
      message: "Passsword Reset Successfully!",
      doExist,
    });

    return;
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = { login, signup, forgetPassword, restPassword };
