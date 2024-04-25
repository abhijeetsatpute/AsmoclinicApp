const path = require('path');

const mysql = require('mysql'); 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fileUpload = require('express-fileupload')
app.set('view engine', 'ejs');
app.set('views', 'views');


 
const router = require('./routes');
const routerTeam = require('./routes/team');
const routerGallery = require('./routes/gallery');
const routerResults = require('./routes/results');
const routerAdmin = require('./routes/admin');
const routerBlogs = require('./routes/blogs');
const routerAbout = require('./routes/about');
//const mySql = require('connection')
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
 

app.use('/', router)
app.use('/team', routerTeam)
app.use('/gallery', routerGallery)
app.use('/about', routerAbout)
app.use('/results', routerResults)
app.use('/blogs', routerBlogs)
app.use('/admin',routerAdmin); 
app.use((req, res, next) => {
  res.status(404).render('404');
});



app.listen(3000);