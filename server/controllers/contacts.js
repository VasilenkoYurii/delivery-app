const Contact = require('../models/kfc');

// const fs = require("fs/promises");
// const path = require("path");
// const { nanoid } = require("nanoid");

// const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await Contact.find();
  return data;
};

const getContactById = async contactId => {
  // const result = await Contact.findOne({ _id: contactId });
  const result = await Contact.findById(contactId);
  return result || null;
};

const addContact = async body => {
  const result = await Contact.create(body);
  return result;
};

const updateContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return result;
};

const updateStatusContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return result;
};

const removeContact = async contactId => {
  const result = await Contact.findByIdAndRemove(contactId);
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  updateStatusContact,
  removeContact,
  addContact,
  updateContact,
};
