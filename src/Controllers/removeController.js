const { removeBackground } = require("@imgly/background-removal-node");

const removeBG = async (req, res, next) => {
  try {
    if (req.file) {
      const imagePath = req.file.buffer;
      const blobData = await removeBackground(imagePath);
      const buffer = await blobData.arrayBuffer();
      const base64String = Buffer.from(buffer).toString("base64");

      res.json(base64String);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { removeBG };
