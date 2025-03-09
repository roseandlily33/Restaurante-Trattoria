const reviewRouter = require('express').Router();
const {
    addReview,
  getReviews,
  getSingleReview,
  deleteReview
} = require('./review.controller');
const { authMiddleware } = require("../../utils/auth");

reviewRouter.route("/").get(getReviews).post(authMiddleware, addReview);
reviewRouter.route("/:reviewId").get(getSingleReview).delete(authMiddleware, deleteReview);

module.exports = reviewRouter;