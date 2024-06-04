/*

Email Data that we need

1. From which User?
2. To which User?
3. Subject 
4. Text of Email ---> Body
5. HTML of Email ---> Body

*/

const nodeMailer = require("nodemailer");

// Define our email options
// App Passwords
const emailOptions = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "shopwithease6@gmail.com",
    pass: "qvwouasakgfpqndf",
  },
};

const sendEmail = async (options) => {
  // 1. create container for sending email
  const transporter = nodeMailer.createTransport(emailOptions);

  const emailDataOptions = {
    from: "Shop with Ease",
    to: options.email,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  console.log("sending email");
  await transporter.sendMail(emailDataOptions);
};

module.exports = sendEmail;
