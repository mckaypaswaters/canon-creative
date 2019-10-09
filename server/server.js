require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
const authCtrl = require('./controllers/authController')
const galleryCtrl = require('./controllers/galleryController')
const twilioCtrl = require('./controllers/twilioController')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)

app.get('/api/photos', galleryCtrl.getAllPhotos)
app.post('/api/photo', galleryCtrl.createPhoto)
app.delete('/api/photo/:gallery_id', galleryCtrl.deletePhoto)
app.put('/api/photo/:gallery_id', galleryCtrl.updatePhoto)

app.post('/api/messages', twilioCtrl.twilio)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} days until Halo comes to PC`))
})
