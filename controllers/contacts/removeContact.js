const { Contact } = require("../../models");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;

  const contacts = await Contact.findByIdAndDelete(contactId);

  if (!contacts) return res.status(404).json({ message: "Not found" });

  res.json({ message: "contact deleted" });
};

module.exports = removeContact;
