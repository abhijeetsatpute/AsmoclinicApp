// Import the mysql module
const mysql = require('mysql'); 


// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: `localhost`, 
  user: 'root', 
  database: 'database'
});

// // Create a connection to the MySQL database
// const connection = mysql.createConnection({
//   host: '83.69.139.151', 
//   user: 'asmocli1_user',
//   password: 'iuL=(Qq8;c+8',
//   database: 'asmocli1_database'
// });
// Connect to the database\

// Execute a SQL query
connection.query('SELECT * FROM doctors WHERE doctors.name INCLUDES dawdw  ', (err, results, fields) => {
  if (err) {
    console.error('Error executing query: ', err);
    return;
  }
  console.log('Query results: ', results);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing connection: ', err);
    return;
  }
  console.log('Connection closed');
});

module.exports = connection