require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
const authCtrl = require('./controllers/authController')
const galleryCtrl = require('./controllers/galleryController')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)

app.get('/api/photos', galleryCtrl.getAllPhotos)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} days until Halo comes to PC`))
})
