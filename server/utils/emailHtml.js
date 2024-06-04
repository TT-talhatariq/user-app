const emailRegister = (username) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Shop with ease</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                background-color: #FF6347;
                color: white;
                padding: 10px 0;
                border-radius: 10px 10px 0 0;
            }
            .content {
                margin: 20px 0;
            }
            .content h1 {
                color: #333;
            }
            .content p {
                color: #555;
                line-height: 1.6;
            }
            .footer {
                text-align: center;
                margin-top: 20px;
                padding: 10px;
                background-color: #f4f4f4;
                border-top: 1px solid #e4e4e4;
                color: #888;
            }
            .footer a {
                color: #FF6347;
                text-decoration: none;
            }
            .footer a:hover {
                text-decoration: underline;
            }
          ul{
            display:flex;
            flex-direction:column;
            gap:20px;
          }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Welcome to Shop with ease</h2>
            </div>
            <div class="content">
                <h1>Hi ${username},</h1>
                <p>Welcome to Shop with ease!</p>
                <p>We are delighted to have you join our shopping community. Shop with ease is your one-stop destination for a seamless and enjoyable shopping experience. Whether you're looking for the latest fashion, electronics, or daily essentials, we've got you covered.</p>
                <p>Here’s what you can do next:</p>
                <ul>
                    <li><strong>Complete Your Profile:</strong> Update your details to receive personalized recommendations and offers.</li>
                    <li><strong>Explore Our Collection:</strong> Browse our extensive range of products and find exactly what you need.</li>
                    <li><strong>Exclusive Deals:</strong> Stay tuned for special promotions and discounts just for you.</li>
                    <li><strong>Stay Informed:</strong> Check your inbox for updates, tips, and exclusive offers to enhance your shopping experience.</li>
                </ul>
                <p>If you have any questions or need assistance, our support team is here to help. Feel free to reach out to us at <a href="mailto:support@shopwithease.com">support@shopwithease.com</a>.</p>
                <p>Thank you for choosing Shop with ease. We’re excited to make your shopping experience delightful and hassle-free!</p>
                <p>Best regards,<br>The Shop with ease Team</p>
                <p><strong>P.S.</strong> Don't forget to follow us on social media to stay updated with the latest news and offers!</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Shop with ease. All rights reserved.</p>
                <p><a href="https://www.shopwithease.com">Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>
    
    `;
};

const emailForget = (url) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your Password</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                background-color: #FF6347;
                color: white;
                padding: 10px 0;
                border-radius: 10px 10px 0 0;
            }
            .content {
                margin: 20px 0;
            }
            .content h1 {
                color: #333;
            }
            .content p {
                color: #555;
                line-height: 1.6;
            }
            .content a {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FF6347;
                color: white;
                text-decoration: none;
                border-radius: 5px;
            }
            .footer {
                text-align: center;
                margin-top: 20px;
                padding: 10px;
                background-color: #f4f4f4;
                border-top: 1px solid #e4e4e4;
                color: #888;
            }
            .footer a {
                color: #FF6347;
                text-decoration: none;
            }
            .footer a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Password Reset Request</h2>
            </div>
            <div class="content">
                <h1>Hi,</h1>
                <p>We received a request to reset your password for your Shop with ease account. No worries, we’ve got you covered!</p>
                <p>To reset your password, simply click the button below:</p>
                <p><a href="${url}" target="_blank">Reset Your Password</a></p>
                <p>If you did not request a password reset, please ignore this email or contact our support team if you have any questions.</p>
                <p>Thank you for being a part of Shop with ease!</p>
                <p>Best regards,<br>The Shop with ease Team</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Shop with ease. All rights reserved.</p>
                <p><a href="https://www.shopwithease.com">Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = { emailRegister, emailForget };
