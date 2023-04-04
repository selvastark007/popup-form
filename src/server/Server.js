const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3001;


app.post("/submit-form", (req, res) => {
    const { name, email, phone, services } = req.body;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "your-email@gmail.com", // your email address
        pass: "your-email-password", // your email password
      },
    });

    let info = transporter.sendMail({
        from: '"Your Name" <your-email@gmail.com>', // sender address
        to: "recipient-email@example.com", // list of receivers
        subject: "New Form Submission", // Subject line
        html: `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Services: ${services}</p>
        `, // HTML body
      });

      res.send("Form submitted successfully!");

      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
  });