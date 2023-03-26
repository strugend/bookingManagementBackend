const express = require("express");
const router = express.Router();
module.exports = router;

const BookingAdmin = require("../model/adminBookingSchema")
const BookingUser = require('../model/userBookingSchema')
const User = require('../model/userSchema')



router.get("/", async (req, res) => {
    res.status(201).json({ message: "Booking is working" })
})

router.get("/deleteAllBooking", async (req, res) => {
    try {
        const deleteAllBooking = await BookingUser.deleteMany()
        if (deleteAllBooking) {
            console.log(true);
            res.status(201).json({ message: "Rinkiya ke papa all messages deleted hi hi hi!!!" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})

router.get("/getAppointment", async (req, res) => {
    try {
        const appointmentInfo = await BookingUser.find({ booking_link_id: req.query.booking_link_id })
        if (appointmentInfo) {
            res.send(appointmentInfo)
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
});


router.post("/scheduleAppointment", async (req, res) => {
    const { timeSchedule, dateSchedule, question_name, question_email, question_phone, question_address, question_numberOfPeople } = req.body;
    const booking_link_id = req.query.booking_link_id
    if (!booking_link_id || !timeSchedule || !dateSchedule || !question_name || !question_email || !question_phone || !question_address || !question_numberOfPeople) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }
    try {
        User.findOne({ booking_link_id }, async (err, result) => {
            if (err) throw err;
            if (!result) {
                res.status(422).json({ message: "Error: Booking ID not found in database." })
                return;
            } else {
                const book = new BookingUser({
                    booking_link_id: booking_link_id,
                    timeSchedule,
                    dateSchedule,
                    question_name,
                    question_email,
                    question_phone,
                    question_address,
                    question_numberOfPeople
                });
                await book.save();
                res.status(201).json({ message: "Booking Done Successfully" });

            }
        })
        // bookingId = await User.findOne({ booking_link_id: booking_link_id })
        // console.log(bookingId);


    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
})


router.get("/bookedAppointmentTime", async (req, res) => {
    const booking_link_id = req.query.booking_link_id
    if (!booking_link_id) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }
    try {
        BookingUser.find({ booking_link_id }, async (err, result) => {
            if (err) throw err;
            if (!result) {
                res.status(401).json({ message: "Error: Booking ID not found in database." })
                return;
            } else {
                let bookedTime = []
                for(i=0; i<result.length; i++) {
                    bookedTime.push(result[i]["timeSchedule"]);
                }
                res.status(201).json({ bookedTime: bookedTime });
        }
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }

})

router.get("/bookedAppointmentDate", async (req, res) => {
    const booking_link_id = req.query.booking_link_id
    if (!booking_link_id) {
        return res.status(422).json({ error: "Some data fields are missing" });
    }
    try {
        BookingUser.find({ booking_link_id }, async (err, result) => {
            if (err) throw err;
            if (!result) {
                res.status(401).json({ message: "Error: Booking ID not found in database." })
                return;
            } else {
                let bookedDate = []
                for(i=0; i<result.length; i++) {
                    bookedDate.push(result[i]["dateSchedule"]);
                }
                res.status(201).json({ bookedDate: bookedDate });
        }
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }

})

// router.post("/updateAppointment", async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(500).json({ message: "Internal Server Error" });
//         console.log(error);
//     }
// })