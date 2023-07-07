const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const SENDGRID_API_KEY =
  "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";

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "yura.vasilenko@meta.ua" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
