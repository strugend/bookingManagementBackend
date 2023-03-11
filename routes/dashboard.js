const express = require("express");
const router = express.Router();
module.exports = router;

const BookingAdmin = require("../model/adminBookingSchema")
const BookingUser = require('../model/userBookingSchema')

router.get("/", async(req, res) => {
    res.status(201).json({ message: "Dashboard is working" })
})

