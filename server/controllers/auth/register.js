const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
require("dotenv").config();
const { BASE_URL } = process.env;

const { User } = require("../../models/user");
const { HttpError, sendEmail } = require("../../helpers");
const verifyEmailTemplate = require("../../template/verifyMail");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw next(HttpError(409, "Email already in use"));
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    promo: ["20%"],
    password: hashPassword,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: verifyEmailTemplate(BASE_URL, verificationToken),
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    newUser,
  });
};

module.exports = register;
