require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
const authCtrl = require('./controllers/authController')
const galleryCtrl = require('./controllers/galleryController')
const twilioCtrl = require('./controllers/twilioController')
const s3Ctrl = require('./controllers/s3Controller')
const aws = require('aws-sdk')
const {S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env

app.use(express.static(`${__dirname}/../build`))

app.use(express.json())
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: SESSION_SECRET
// }))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)

app.get('/api/photos', galleryCtrl.getAllPhotos)
app.post('/api/photo', galleryCtrl.createPhoto)
app.delete('/api/photo/:gallery_id', galleryCtrl.deletePhoto)
app.put('/api/photo/:gallery_id', galleryCtrl.updatePhoto)

app.post('/api/messages', twilioCtrl.twilio)

app.get('/api/signs3', (req, res) => {
    aws.config = {
      region: 'us-west-1',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    };
  
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read',
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
  
      return res.send(returnData);
    });
  });

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} days until Halo comes to PC`))
})
