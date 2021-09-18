const express = require("express");

const { userJoiSchema } = require("../../models/user");
const { validation, tryCatchWrapper, authenticate, upload } = require("../../middleware");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

const userValidationMiddleware = validation(userJoiSchema);

router.post("/signup", userValidationMiddleware, tryCatchWrapper(ctrl.signup));

router.post("/login", userValidationMiddleware, tryCatchWrapper(ctrl.login));

router.get("/logout", tryCatchWrapper(authenticate), tryCatchWrapper(ctrl.logout));

router.get("/current", tryCatchWrapper(authenticate), tryCatchWrapper(ctrl.current));

router.patch("/", tryCatchWrapper(authenticate), tryCatchWrapper(ctrl.updateCurrentUserSubscription));

router.get("/verify/:verificationToken", tryCatchWrapper(ctrl.verifyUserEmail));

router.post("/verify", tryCatchWrapper(ctrl.sendLinkToVerifyUserEmail));

router.patch(
  "/avatars",
  tryCatchWrapper(authenticate),
  tryCatchWrapper(upload.single("avatarURL")),
  tryCatchWrapper(ctrl.updateUserAvatar)
);

module.exports = router;
