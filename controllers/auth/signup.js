const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4 } = require("uuid");

const { User } = require("../../models");
const { sendMail } = require("../../utils");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = await new User({ email, verifyToken: v4() });
  newUser.setPassword(password);
  newUser.avatarURL = gravatar.url(email, { protocol: "http" });

  const msg = {
    to: email,
    subject: "Confirm registration on the site",
    html: `<a href="http://localhost:3000/api/users/verify/${newUser.verifyToken}">Confirm registration</a>`,
  };

  await sendMail(msg);

  await newUser.save();

  res.status(201).json({
    newUser,
  });
};

module.exports = signup;
