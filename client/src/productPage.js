import React from 'react'
import { Component } from 'react';
import Product from './product';


class ProductPage extends Component {
   render() {
      return (
         <div>
            <NavBar />
            <ProductGrid />
            <Footer />
         </div>
      )
   }
}

class NavBar extends Component {
   render() {
      return (
         <div>
            <div className='d-flex flex-row pt-5'>
               <div className='col-6 my-auto'>
                  <h1 className='ps-3'>Product List</h1>
               </div>
               <div className='d-flex justify-content-end col-6 my-auto'>
                  <a href='/add-product' class='btn btn-outline-primary me-3'> ADD</a>
                  <a href='/back' class="btn btn-outline-primary me-3"> MASS DELETE</a>
               </div>
            </div>
            <div>
               <hr className='m-3'></hr>
            </div>
         </div >

      )
   }
}

class ProductGrid extends Component {
   constructor(props) {
      super(props);
      this.state = { products: [{ sku: "123", name: "test", size: "700", price: "50" }, { sku: "123", name: "test", size: "700", price: "50" }, { sku: "123", name: "test", size: "700", price: "50" }, { sku: "123", name: "test", size: "700", price: "50" }] };
   }
   render() {
      let createProducts = this.state.products.map(function iterator(product) {
         return <Product {...product} />;
      });

      return (
         <div className="row justify-content-center">
            {createProducts}
         </div>
      );
   }
}

class Footer extends Component {
   render() {
      return (
         <div>
            <div>
               <hr className='m-3'></hr>
            </div>
            <div className='text-center'>
               <h5>Scandiweb Test assignment</h5>
            </div>
         </div>)
   }
}

export default ProductPage;
