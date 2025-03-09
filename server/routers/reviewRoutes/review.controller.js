const { Review, User } = require("../../models");

module.exports = {
  addReview: async (req, res) => {
    try {
      if (req.user) {
        const review = await Review.create({
          reviewText: req.body.reviewText,
          reviewAuthor: req.user.username,
        });
        await User.findOneAndUpdate(
          { _id: req.user._id },
          { $addToSet: { reviews: review._id } }
        );
        return res.status(200).json(review);
      } else {
        return res.status(200).json({msg: 'Could not add review'});
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  getReviews: async (req, res) => {
    try {
      const reviews = await Review.find().sort({ createdAt: -1 });
      return res.status(200).json(reviews);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  getSingleReview: async (req, res) => {
    try {
      const review = await Review.findById(req.params.reviewId);
      return res.status(200).json(review);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  deleteReview: async (req, res) => {
    try {
      const review = await Review.findOneAndDelete({ _id: req.params.reviewId });
      return res.status(200).json(review);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};