require('dotenv').config()
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    process.env.TWILIO_PHONE_NUMBER,
    process.env.MY_NUMBER
)

// const {TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_PHONE_NUMBER, MY_NUMBER} = process.env

module.exports = {
    twilio (req, res){
        const {firstName, lastName, email, subject, message} = req.body
        res.header('Content-Type', 'application/json')
        client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.MY_NUMBER,
            body: `Message from: ${firstName} ${lastName}
            Subject: ${subject}
            Message: ${message}
            Reply to: ${email}`
        })
        .then(() => {
            res.send(JSON.stringify({success: true}))
        })
        .catch(err => {
            console.log(err)
            res.send(JSON.stringify({success: false}))
        })
    }
}