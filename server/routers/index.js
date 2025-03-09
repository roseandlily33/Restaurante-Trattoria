const express = require('express');

// const adminRouter = require('./adminRoutes.js/admin.router');
const usersRouter = require('./userRoutes/user.router');
const reviewRouter = require('./reviewRoutes/review.router');
const reservationRouter = require('./reservationRoutes/reservation.router');

const router = express.Router();

// router.use('/admin', adminRouter);
router.use('/users', usersRouter);
router.use('/review', reviewRouter);
router.use('/reservation', reservationRouter);

module.exports = router;