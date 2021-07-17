const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'roirein@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome To My App, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'roirein@gmail.com',
        subject: 'Goodbye',
        text: `${name}, Please let us know what was wrong with our app`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}