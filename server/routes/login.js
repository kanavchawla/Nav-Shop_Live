const express = require("express");
const router = express.Router();

const addMember = require("../Controllers/Form");
router.use(express.urlencoded({ extended: true }));

router.get("/login", (req, res) => {
  res.send("login page");
});
router.route("/login").post(addMember);

module.exports = router;
