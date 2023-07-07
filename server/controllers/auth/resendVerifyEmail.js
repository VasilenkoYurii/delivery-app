const { User } = require("../../models/user");
const nodemailer = require("nodemailer");
const { HttpError, sendEmail } = require("../../helpers");
const verifyEmailTemplate = require("../../template/verifyMail");

const { MAIL_PASSWORD } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const BASE_URL = `${req.protocol}://${req.headers.host}`;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.verify) {
    throw HttpError(401, "Email already verify");
  }

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
  //   html: verifyEmailTemplate(BASE_URL, user.verificationToken),
  // };

  // await sendEmail(verifyEmail);

  res.json({
    message: "Verify email send success",
  });
};

module.exports = resendVerifyEmail;
