const { Reservation, User } = require("../../models");

module.exports = {
  addReservation: async (req, res) => {
    try {
      if (req.user) {
        const reservation = await Reservation.create({
          reservationName: req.user.username,
          reservationDate: req.body.reservationDate,
          reservationNumber: req.body.reservationNumber,
          reservationTime: req.body.reservationTime,
        });
        await User.findOneAndUpdate(
          { _id: req.user._id },
          { $addToSet: { reservations: reservation._id } }
        );
        return res.status(200).json(reservation);
      } else {
        return res.status(200).json({ msg: "Could not add the reservation" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  getUserReservations: async (req, res) => {
    try {
      if (req.user) {
        const reservations = await Reservation.find({
          reservationName: req.user.username,
        });
        return res.status(200).json(reservations);
      } else {
        return res.status(200).json({msg: 'Couldnt get the reservations'});
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllReservations: async (req, res) => {
    try {
      const reservations = await Reservation.find();
      return res.status(200).json(reservations);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteReservation: async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndDelete({
        _id: req.params.reservationId,
      });
      return res.json(reservation);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
