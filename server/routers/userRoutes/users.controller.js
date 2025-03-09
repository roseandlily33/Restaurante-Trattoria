const { User } = require("../../models");
const { signToken } = require("../../utils/auth");

module.exports = {
  addUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      const token = signToken(user);
      return res.json({ token, user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "Not Found" });
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        return res.status(404).json({ msg: "Not Found" });
      }
      const token = signToken(user);
      return res.json({ token, user });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getUser: async (req, res) => {
    try {
      if (req.user) {
        const user = await User.findById(req.user._id).populate("reviews");
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ msg: "Not Found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      return  res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
