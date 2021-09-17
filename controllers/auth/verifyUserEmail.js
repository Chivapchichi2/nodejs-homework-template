const { User } = require("../../models");
const { NotFound } = require("http-errors");

const verifyUserEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOneAndUpdate(
    { verifyToken: verificationToken },
    { verifyToken: null, verify: true },
    { new: true }
  );

  if (!user) {
    throw new NotFound("User not found");
  }
  res.json({ message: "Verification successful" });
};

module.exports = verifyUserEmail;
