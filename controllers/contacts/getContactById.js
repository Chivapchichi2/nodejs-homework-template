const { Contact } = require("../../models");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId);

  if (!contact) return res.status(404).json({ message: "Not found" });

  res.json({ contact });
};

module.exports = getContactById;
