const { Router } = require("express");
const removeController = require("../Controllers/removeController");
const upload = require("../middleware/upload");

const router = Router();

router.post("/create-image", upload.single("image"), removeController.removeBG);

module.exports = router;
