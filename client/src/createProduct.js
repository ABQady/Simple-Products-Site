import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Axios from 'axios'
import './App.css'
import Footer from './footer';

function CreateProduct() {

   const [sku, setSKU] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [size, setSize] = useState("");
   const [weight, setWeight] = useState("");
   const [dimensions, setDimensions] = useState("");

   const addProduct = () => {
      Axios.post('http://localhost:3002/api/create', { sku: sku, name: name, price: price, size: size, weight: weight, dimensions: dimensions });
      //window.open("/");
      window.location.href = '/';
   }
   // function addProduct() {
   //    Axios.post('http://localhost:3002/api/create', { sku: sku, name: name, price: price, size: size, weight: weight, dimensions: dimensions });
   // }

   useEffect(() => {
      document.getElementById('productType').addEventListener('change', function () {
         if (this.value == 'DVD') {
            document.getElementById("DVD").classList.remove("d-none")
            document.getElementById("Furniture").classList.add("d-none")
            document.getElementById("Book").classList.add("d-none")
         } else if (this.value == 'Furniture') {
            document.getElementById("Furniture").classList.remove("d-none")
            document.getElementById("DVD").classList.add("d-none")
            document.getElementById("Book").classList.add("d-none")
         } else if (this.value == 'Book') {
            document.getElementById("Book").classList.remove("d-none")
            document.getElementById("Furniture").classList.add("d-none")
            document.getElementById("DVD").classList.add("d-none")
         }
      });
   })

   return (
      <div>
         <div>
            <div className='d-flex flex-row pt-5'>
               <div className='col-6 my-auto'>
                  <h1 className='ps-3'>Product Add</h1>
               </div>
               <div className='d-flex justify-content-end col-6 my-auto'>
                  <button
                     onClick={() => {
                        addProduct();
                        //window.location.href = '/';
                     }}
                     className='btn btn-outline-primary me-3'> Save</button>
                  <a href='/' className="btn btn-outline-primary me-3"> Cancel</a>
               </div>
            </div>
            <div>
               <hr className='m-3'></hr>
            </div>
         </div >

         <div id='product_form' className="m-3">
            <div className='col-6'>
               <div className='row mb-3'>
                  <label className='col-4'>SKU: </label>
                  <input id='sku' className='col-8' type="text" onChange={(e) => {
                     setSKU(e.target.value)
                  }} />
               </div>
               <div className='row mb-3'>
                  <label className='col-4'>Name: </label>
                  <input id='name' className='col-8' type="text" onChange={(e) => {
                     setName(e.target.value)
                  }} />
               </div>
               <div className='row mb-3'>
                  <label className='col-4'>Price: </label>
                  <input id='price' className='col-8' type="text" onChange={(e) => {
                     setPrice(e.target.value)
                  }}></input>
               </div>
               <div className='row mb-3'>
                  <label className='col-4' for="type">Type:</label>
                  <select id="productType" className='col-8' name="type">
                     <option value="DVD">DVD</option>
                     <option value="Furniture">Furniture</option>
                     <option value="Book">Book</option>
                  </select>
               </div>

               <div id='DVD' className='row mb-3  d-none'>
                  <label className='col-4'>Size (MB): </label>
                  <input id='size' className='col-8' type="text" onChange={(e) => {
                     setSize(e.target.value)
                  }}></input>
               </div>

               <div id='Furniture' className='d-none'>
                  <div className='row mb-3'>
                     <label className='col-4'>Height: </label>
                     <input id='height' className='col-8' type="text" onChange={(e) => {
                        setDimensions(e.target.value)
                     }}></input>
                  </div>
                  <div className='row mb-3'>
                     <label className='col-4'>Width: </label>
                     <input id='width' className='col-8' type="text" onChange={(e) => {
                        setDimensions(e.target.value)
                     }}></input>
                  </div>
                  <div className='row mb-3'>
                     <label className='col-4'>Length: </label>
                     <input id='length' className='col-8' type="text" onChange={(e) => {
                        setDimensions(e.target.value)
                     }}></input>
                  </div>
               </div>
               <div id='Book' className='row mb-3 d-none'>
                  <label className='col-4'>Weight (KG): </label>
                  <input id='weight' className='col-8' type="text" onChange={(e) => {
                     setWeight(e.target.value)
                  }}></input>
               </div>
            </div>
         </div>
         <Footer />
      </div >
   )
}

export default CreateProduct;