const functions = require('firebase-functions');
const express = require('express');
var favicon = require('serve-favicon')
const path = require('path');

const app = express();

app.set('views','./views')

app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, '/', 'favicon.ico')))

app.get('/*',function (req,res) {
  //cached for a month
  res.setHeader("Cache-Control", "public, max-age=2592000");
  res.render("index")
})

exports.app = functions.https.onRequest(app);
