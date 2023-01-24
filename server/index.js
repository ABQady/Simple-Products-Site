const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all products
app.get("/api/get", (req, res) => {
   db.query("SELECT * FROM products", (err, result) => {
      if (err) {
         console.log(err)
      }
      res.send(result)
   });
});

// Route for creating a new product
app.post('/api/create', (req, res) => {

   const sku = req.body.sku;
   const name = req.body.name;
   const price = req.body.price;
   const size = req.body.size;
   const weight = req.body.weight;
   const dimensions = req.body.dimensions;

   db.query("INSERT INTO products (SKU, Name, Price, Size, Weight, Dimensions) VALUES (?,?,?)", [sku, name, price, size, weight, dimensions], (err, result) => {
      if (err) {
         console.log(err)
      }
      console.log(result)
   });
})

// Route to delete a product
app.delete('/api/delete/:sku', (req, res) => {
   const id = req.params.sku;

   db.query("DELETE FROM products WHERE SKU= ?", sku, (err, result) => {
      if (err) {
         console.log(err)
      }
   })
})

app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`)
})