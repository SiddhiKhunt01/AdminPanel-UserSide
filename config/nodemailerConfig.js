const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "5997siddhikhunt@gmail.com",
        pass: "panihmdkinzuvwnr" 
    }
});

module.exports = transporter;