const reservationRouter = require("express").Router();
const {
  addReservation,
  getUserReservations,
  getAllReservations,
  deleteReservation,
} = require("./reservation.controller");
const { authMiddleware } = require("../../utils/auth");

reservationRouter
  .route("/")
  .get(authMiddleware, getUserReservations)
  .post(authMiddleware, addReservation);
reservationRouter.route("/all").get(getAllReservations);
reservationRouter
  .route("/:reservationId")
  .delete(authMiddleware, deleteReservation);

module.exports = reservationRouter;
