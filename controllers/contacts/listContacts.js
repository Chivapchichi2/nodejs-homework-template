const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { page = 1, limit = 10, favorite = false } = req.query;
  const contacts = await Contact.find({ owner: req.user._id, favorite }, "", {
    skip: (+page - 1) * +limit,
    limit: +limit,
  }).populate("owner", "_id email subscription");

  res.json({ contacts });
};

module.exports = listContacts;
