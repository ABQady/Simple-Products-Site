import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Component } from 'react';
import Product from './product';
import Footer from './footer';

function ProductPage() {

   const [products, setProducts] = useState([]);

   const deleteAll = async () => {

      const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));

      for (const cb of checkboxes) {
         if (cb.checked === true) {
            console.log(cb.value);
            try {
               await Axios.post('https://server-abqady.vercel.app/delete', { SKU: cb.value })
                  .then((response) => {
                     console.log(response.status);
                     console.log(response.data);
                  })

            } catch (e) {

            }
         }
      }
      window.location.reload();
   }

   useEffect(async () => {
      await Axios.get("https://server-abqady.vercel.app/get").then((response) => {
         setProducts(response.data)
      });
   }, [])

   return (
      <div>
         <div>
            <div className='d-flex flex-row pt-5'>
               <div className='col-6 my-auto'>
                  <h1 className='ps-3'>Product List</h1>
               </div>
               <div className='d-flex justify-content-end col-6 my-auto'>
                  <a href='/add-product' className='btn btn-outline-primary me-3'> ADD</a>
                  <button onClick={() => { deleteAll(); }} id="delete-product-btn" className="btn btn-outline-primary me-3"> MASS DELETE</button>
               </div>
            </div>
            <div>
               <hr className='m-3'></hr>
            </div>
         </div >

         <div className="row justify-content-center">
            {products.map((product) => {
               return (
                  <Product {...product} />
               )
            })}
         </div>
         <Footer />
      </div>
   );
}

export default ProductPage;
