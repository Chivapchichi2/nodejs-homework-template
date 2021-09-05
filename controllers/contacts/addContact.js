const { Contact } = require("../../models");
const { userJoiSchema } = require("../../models/user");

const addContact = async (req, res, next) => {
  try {
    const contacts = await Contact.create({ ...req.body, owner: req.user._id });

    res.status(201).json({ contacts });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
