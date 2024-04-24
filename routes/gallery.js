const path = require('path');

const express = require('express');

const rootDir = require('../util/path'); 

const router = express.Router();

router.get('/', (req, res, next) => {
   
  res.render('gallery', { 
    path: '/gallery'
  });
});

// router.post('/upload', (req, res, next) => {
//   if (!req.files || !req.files.image) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   const image = req.files.image;
//   const extension = path.extname(image.name); // Get file extension
//   const fileName = `image_${Date.now()}${extension}`; // Generate unique filename
  
//   image.mv(path.join(__dirname,"../", "/public/assets/images/gallery", fileName), (err) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send('File uploaded successfully!');
//   });
// });

module.exports = router;
