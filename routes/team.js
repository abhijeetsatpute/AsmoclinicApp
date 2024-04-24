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
    array: [{id:1, name:"test",position:24,image:'test'},{id:2, name:"test2",position:24,image:'test'},{id:3, name:"test3",position:24,image:'test'}]
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  res.render('teamPage', {
    path: `/team&${id}`, 
    data: {id:1, name:"test",position:24,image:'test'}
  });
});

module.exports = router;