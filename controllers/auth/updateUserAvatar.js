const fs = require("fs/promises");
const path = require("path");
const { nextTick } = require("process");

const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public/avatars");

const updateUserAvatar = async (req, res) => {
  const { _id } = req.user;
  const { originalname } = req.file;
  const dirPath = path.join(avatarsDir, `${_id}`);

  try {
    await fs.mkdir(dirPath);

    const uploadDir = path.join(dirPath, originalname);

    await fs.rename(req.file.path, uploadDir);

    const avatarURL = `/public/avatars/${_id}/${originalname}`;
    const user = await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

    if (!user) return res.status(404).json({ message: "Not found" });
    res.json({
      user,
    });
  } catch (error) {
    fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateUserAvatar;
