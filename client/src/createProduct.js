import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css'

function CreateProduct() {

   const [sku, setSKU] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [size, setSize] = useState("");
   const [weight, setWeight] = useState("");
   const [dimensions, setDimensions] = useState("");

   const addProduct = () => {
      Axios.post('http://localhost:3002/api/create', { sku: sku, name: name, price: price, size: size, weight: weight, dimensions: dimensions })
   }

   return (
      <div>
         <div>
            <div className='d-flex flex-row pt-5'>
               <div className='col-6 my-auto'>
                  <h1 className='ps-3'>Product Add</h1>
               </div>
               <div className='d-flex justify-content-end col-6 my-auto'>
                  <button onClick={addProduct} class='btn btn-outline-primary me-3'> Save</button>
                  <a href='' class="btn btn-outline-primary me-3"> Cancel</a>
               </div>
            </div>
            <div>
               <hr className='m-3'></hr>
            </div>
         </div >

         <div className="m-3">
            <div className='col-6'>
               <div className='row mb-3'>
                  <label className='col-4'>SKU: </label>
                  <input className='col-8' type="text" onChange={(e) => {
                     setSKU(e.target.value)
                  }} />
               </div>
               <div className='row mb-3'>
                  <label className='col-4'>Name: </label>
                  <input className='col-8' type="text" onChange={(e) => {
                     setName(e.target.value)
                  }} />
               </div>
               <div className='row mb-3'>
                  <label className='col-4'>Price: </label>
                  <textarea className='col-8' onChange={(e) => {
                     setPrice(e.target.value)
                  }}></textarea>
               </div>
               <div className='row mb-3'>
                  <label className='col-4' for="type">Type:</label>
                  <select className='col-8' name="type" id="productType">
                     <option value="DVD">DVD</option>
                     <option value="Furniture">Furniture</option>
                     <option value="Book">Book</option>
                  </select>
               </div>

               <div className='row mb-3'>
                  <label className='col-4'>Size (MB): </label>
                  <textarea className='col-8' onChange={(e) => {
                     setSize(e.target.value)
                  }}></textarea>
               </div>

               <div className='row mb-3'>
                  <label className='col-4'>Height: </label>
                  <textarea className='col-8' onChange={(e) => {
                     setDimensions(e.target.value)
                  }}></textarea>
               </div>
               <div className='row mb-3'>
                  <label className='col-4'>Width: </label>
                  <textarea className='col-8' onChange={(e) => {
                     setDimensions(e.target.value)
                  }}></textarea>
               </div>
               <div className='row mb-3'>
                  <label className='col-4'>Length: </label>
                  <textarea className='col-8' onChange={(e) => {
                     setDimensions(e.target.value)
                  }}></textarea>
               </div>
               <div className='row mb-3'>
                  <label className='col-4'>Weight (KG): </label>
                  <textarea className='col-8' onChange={(e) => {
                     setWeight(e.target.value)
                  }}></textarea>
               </div>
            </div>
         </div>
      </div >
   )
}

export default CreateProduct;