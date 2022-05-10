require("dotenv").config({ path: ".env.local" });
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
console.log(process.env.BACK_PORT, process.env.MAILER);
const port = process.env.BACK_PORT || 5000;
app.use("/v1", route);

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAILER,
    pass: process.env.PASS,
  },
  secure: true,
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, text } = req.body;

  const mailData = {
    from: process.env.MAILER,
    to: process.env.TO_MAIL,
    subject: "Message from your website!",
    text: `Name: ${name}. Email: ${email}. Message: ${text}`,
  };

  try {
    const result = await transporter.sendMail(mailData);
    res.send({ status: "success", data: result.messageId });
  } catch (error) {
    console.log(error);
    res.send({ status: "error", data: null });
  }
});

app.get("/api/hello", (req, res) => {
  res.send("Hello world!");
});

app.use(cors());
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
