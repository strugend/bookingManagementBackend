const auth = require("./auth")
const booking = require('./booking')

module.exports = app => {
    app.use("/auth", auth)
    app.use("/booking", booking)
}