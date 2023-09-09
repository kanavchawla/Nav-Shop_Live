const express = require("express");
const router = express.Router();

const addProduct = require("../Controllers/Product");
router.use(express.urlencoded({ extended: true }));

router.route("/addProduct").post(addProduct);

module.exports = router;
