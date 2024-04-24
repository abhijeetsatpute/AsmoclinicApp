const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
 
router.get('/', (req, res, next) => {
  
  res.render('login', {
    path: '/login'
  });
});



exports.routes = router; 