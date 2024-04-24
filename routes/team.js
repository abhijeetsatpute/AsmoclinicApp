const path = require('path');

const express = require('express');

const mysql = require('mysql')
const rootDir = require('../util/path');
let doctors
const router = express.Router();
const connection = mysql.createConnection({
  host: `localhost`,
  user: 'root',
  database: 'database'
});
connection.query('SELECT * FROM `doctors`', (err, results, fields) => {
  if (err) {
    console.error('Error executing query: ', err);
    return;
  } 
    doctors = JSON.stringify(results); 
});


router.get('/', (req, res, next) => {
  
  res.render('team', {
    path: '/team',
    array: doctors
  });
});

router.get('/', (req, res, next) => {
  
  res.render('team', {
    path: '/team/:id', 
  });
});

module.exports = router;