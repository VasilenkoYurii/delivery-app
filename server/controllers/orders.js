const Order = require("../models/order");

const { sendEmail } = require("../helpers");

const orderMail = require("../template/orderMail");

const listContacts = async () => {
  const data = await Order.find();
  return data;
};

const findContactsByEmail = async (email) => {
  const data = await Order.find({ email: email });
  return data;
};

const findContactsByPhone = async (phone) => {
  const data = await Order.find({ phone: phone });
  return data;
};

const addContact = async (body) => {
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();

  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  const dataWithDate = { ...body, createdAt: formattedDate };

  const result = await Order.create(dataWithDate);

  const userOrderEmail = {
    to: body.email,
    subject: "Order Confirmation",
    html: orderMail(body),
  };

  await sendEmail(userOrderEmail);

  return result;
};

module.exports = {
  listContacts,
  findContactsByEmail,
  findContactsByPhone,
  addContact,
};
