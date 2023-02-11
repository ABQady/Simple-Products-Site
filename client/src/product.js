import React from 'react'
import { Component } from 'react';

class Product extends Component {
   render() {
      const { SKU, Name, Price, Size, Weight, Dimensions } = this.props;
      return (
         <div className='border p-3 m-3 col-10 col-sm-6 col-md-4 col-lg-3'>
            <input type="checkbox" className='ms-3 form-check-input delete-checkbox' value={SKU}></input>
            <div className='my-auto text-center'>
               <h5>{SKU}</h5>
               <h5>{Name}</h5>
               <h5>{Price} $</h5>
               <h5>{Size} MB</h5>
               <h5>{Weight} KG</h5>
               <h5>{Dimensions} HxWxL</h5>
            </div>
         </div>
      )
   }
}

export default Product;