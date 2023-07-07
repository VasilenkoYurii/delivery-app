const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
require("dotenv").config();
const nodemailer = require("nodemailer");

const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");
const verifyEmailTemplate = require("../../template/verifyMail");

const { MAIL_PASSWORD } = process.env;

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const BASE_URL = `${req.protocol}://${req.headers.host}/`;
  const user = await User.findOne({ email });

  if (user) {
    throw next(HttpError(409, "Email already in use"));
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    promo: [{ id: 1, value: "20%" }],
    password: hashPassword,
    verificationToken,
  });

  const config = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "yura.vasilenko@meta.ua",
      pass: MAIL_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);
  const emailOptions = {
    from: "yura.vasilenko@meta.ua",
    to: email,
    subject: "Email verification",
    html: verifyEmailTemplate(BASE_URL, verificationToken),
  };

  transporter
    .sendMail(emailOptions)
    .then((info) => console.log(info))
    .catch((err) => console.log(err));

  // const verifyEmail = {
  //   to: email,
  //   subject: "Verify email",
  //   html: verifyEmailTemplate(BASE_URL, verificationToken),
  // };

  // await sendEmail(verifyEmail);

  res.status(201).json({
    newUser,
  });
};

module.exports = register;
