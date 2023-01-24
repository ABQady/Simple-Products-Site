import React from 'react'
import { Component } from 'react';

class Product extends Component {
   render() {
      const { sku, name, price, size, weight, dimensions } = this.props;
      return (
         <div className='border p-3 m-3 col-10 col-sm-6 col-md-4 col-lg-3'>
            <input type="checkbox" className='ms-3'></input>
            <div className='my-auto text-center'>
               <h5>{sku}</h5>
               <h5>{name}</h5>
               <h5>{price} $</h5>
               <h5>{size} MB</h5>
               <h5>{weight} KG</h5>
               <h5>{dimensions} HxWxL</h5>
            </div>
         </div>
      )
   }
}

export default Product;