const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

const generateWelcomeEmail = (messageOptions) => {

    //TODO: Create a email template
}

module.exports.sendMail = async (messageOptions) => {

    transporter.sendMail(messageOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email Sent' + info.response);
        }
    })
}

// To use the function: 

/* sendMail({
    from: "foo",
    to: "bar",
    subject: "lorem",
    text: "ipsum",  //For text based mail
    html: "<b>dolor</b>"    //For html based mail
}) */