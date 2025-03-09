const usersRouter = require('express').Router();
const {
    addUser,
  login,
  getUser,
  getAllUsers
} = require('./users.controller');

const { authMiddleware } = require("../../utils/auth");

usersRouter.route("/").post(addUser).get(authMiddleware, getAllUsers);
usersRouter.route("/login").post(login);
usersRouter.route("/me").get(authMiddleware, getUser);

module.exports = usersRouter;