const mongoose = require("mongoose");

const userBookingSchema = new mongoose.Schema({
    booking_link_id: {
        type: String
    },
    timeSchedule: {
        type: String
    },
    dateSchedule: {
        type: String
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    question_name: {
        type: String
    },
    question_email: {
        type: String
    },
    question_phone: {
        type: String
    },
    question_address: {
        type: String
    },
    question_numberOfPeople: {
        type: String
    }
})

const BookingUser = mongoose.model("BookingUser", userBookingSchema);

module.exports = BookingUser;