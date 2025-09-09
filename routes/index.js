const express = require("express");
const { index, sendMessage } = require("../controllers/chat.controller");

const router = express.Router();


router.get("/", index);
router.post("/", sendMessage);

module.exports = router;