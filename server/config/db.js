const mysql = require('mysql')
const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "products"
})

module.exports = db;