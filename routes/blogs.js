const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {

  res.render('blogs', {
    path: '/blogs'
  });
});

// router.post('/upload', (req, res, next) => {
//   const image = req.files.image
//   console.log('image---',image)
//   const extension = image.name.split('.')[-1]
//   image.mv(__dirname + "/public/assets/images/blogs" + extension )
//   res.send('uploaded')
// });




module.exports = router;