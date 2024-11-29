const User = require("../models/userModel");
// const ApiError = require("../utils/apiError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // get all details from req.body
  // validation - not empaty
  // check if user already exist - username,email
  // hashed password
  // create a user object- create entry in db
  // check for user creation
  // return res

  try {
    console.log(req.body);

    const { username, email, dateOfBirth, password } = req.body;

    // Validate required fields
    if (!username || !email || !dateOfBirth || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // check if user already exist - username,email
    const existedUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existedUser) {
      return res
        .status(409)
        .json({ message: "User with username & email already exist" });
    }

    const formattedDateOfBirth = new Date(dateOfBirth);

    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      username: username.toLowerCase(),
      email,
      dateOfBirth: formattedDateOfBirth,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: `User register with username ${username}` });
  } catch (error) {
    res.status(500).json({ message: `something went wrogn ${err.message}` });
  }
};

// login
const login = async (req, res) => {
  //  get username and password from req.body
  // find user
  // check password
  // generate Token
  // send response

  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // find user
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ message: `User with username ${username} not found` });
    }

    // check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate Token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: `User with username ${username} is login successfully`,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: `something went wrogn ${error.message}` });
  }
};

// get all register user
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// delete the user

const deleteUsers = async (req, res) => {
  try {
    const userId = req.params.id;

    // Delete user from the database
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login, getUsers, deleteUsers };
