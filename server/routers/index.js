const express = require('express');

const adminRouter = require('./adminRoutes.js/admin.router');
const usersRouter = require('./usersRoutes.js/users.router');
const reviewRouter = require('./reviewRoutes.js/review.router');
const reservationRouter = require('./reservationRoutes.js/reservation.router');

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/users', usersRouter);
router.use('/review', reviewRouter);
router.use('/reservation', reservationRouter);

module.exports = router;