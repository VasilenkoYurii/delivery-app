const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
require("dotenv").config();
const { BASE_URL } = process.env;

const { User } = require("../../models/user");

const { HttpError, sendEmail } = require("../../helpers");

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
    password: hashPassword,
    verificationToken,
  });

  console.log(email);

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}api/users/verify/${verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    newUser,
  });
};

module.exports = register;
