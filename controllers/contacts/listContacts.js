const { Contact } = require("../../models");

const listContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ owner: req.user._id }).populate("owner", "_id email subscription");

    res.json({ contacts });
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
