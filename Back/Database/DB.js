const mysql = require('mysql2');
 
// create the connection to database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ecommerce',
  port: 3308
});


con.connect(error => {
    if (error) throw error;
    console.log('Bienvenue dans votre Database !');
})

module.exports = con;