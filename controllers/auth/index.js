const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const updateCurrentUserSubscription = require("./updateCurrentUserSubscription");
const updateUserAvatar = require("./updateUserAvatar");
const verifyUserEmail = require("./verifyUserEmail");
const sendLinkToVerifyUserEmail = require("./sendLinkToVerifyUserEmail");

module.exports = {
  signup,
  login,
  logout,
  current,
  updateCurrentUserSubscription,
  updateUserAvatar,
  verifyUserEmail,
  sendLinkToVerifyUserEmail,
};
