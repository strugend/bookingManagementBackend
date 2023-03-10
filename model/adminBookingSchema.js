const mongoose = require("mongoose");

const adminBookingSchema = new mongoose.Schema({
    booking_link: {
        type: String
    },
    booking_page_name: {
        type: String
    },
    booking_page_photo: {
        type: String
    },
    booking_page_banner: {
        type: String
    },
    booking_page_intro: {
        type: String
    },
    booking_page_header_color: {
        type: String
    },
    booking_page_body_colour: {
        type: String
    },
    booking_page_footer: {
        type: String
    },
    booking_page_footer_color: {
        type: String
    },
    booking_page_password: {
        type: String
    },
    booking_timing_availability_from: {
        type: String
    },
    booking_timing_availability_to: {
        type: String
    },
    booking_day_availability_from: {
        type: String
    },
    booking_day_availability_to: {
        type: String
    },
    booking_day_unavailability_from: {
        type: String
    },
    booking_day_unavailability_to: {
        type: String
    },
    booking_timing_break_from: {
        type: String
    },
    booking_timing_break_to: {
        type: String
    },
    booking_timing_duration: {
        type: String
    },
    booking_padding_number: {
        type: String
    },
    booking_group_number: {
        type: String
    },
    booking_timing_min_notice: {
        type: String
    },
    booking_timing_max_notice: {
        type: String
    },
    booking_timing_day_start: {
        type: String
    },
    booking_timezone_select: {
        type: String
    },
    booking_questions: {
        type: Array,
        "default": []
    },
    booking_confirmation_message: {
        type: String
    },
    booking_redirect_url: {
        type: String
    },
    booking_payment_boolean: {
        type: String
    },
    booking_payment_currency: {
        type: String
    },
    booking_payement_price: {
        type: String
    },
    booking_payment_order_id: {
        type: String
    },
    booking_calendar_event_title: {
        type: String
    },
    booking_calendar_event_description: {
        type: String
    },
    booking_calendar_add_location: {
        type: String
    },
    booking_invite_participants_boolean: {
        type: String
    },
    booking_participants: {
        type: Array,
        "default": []
    },
    booked_user_id: {
        type: Array,
        "default": []
    }
});
    
const BookingAdmin = mongoose.model("BookingAdmin", adminBookingSchema);
    
module.exports = BookingAdmin;