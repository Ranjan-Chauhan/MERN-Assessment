const express = require("express");
const {
  login,
  register,
  getUsers,
  deleteUsers,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
