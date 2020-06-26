const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminroute = require('./routes/admin');
const shoproute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminroute);
app.use(shoproute);

app.use((req,res,next) => {
  res.status(404).send("Page Not Found")
});



app.listen(3000);
