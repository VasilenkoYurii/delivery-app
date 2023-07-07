

const { User } = require("../../models/user");

const { HttpError, sendEmail } = require("../../helpers");
const verifyEmailTemplate = require("../../template/verifyMail");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const BASE_URL = `${req.protocol}://${req.headers.host}`;

  console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.verify) {
    throw HttpError(401, "Email already verify");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: verifyEmailTemplate(BASE_URL, user.verificationToken),
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verify email send success",
  });
};

module.exports = resendVerifyEmail;
