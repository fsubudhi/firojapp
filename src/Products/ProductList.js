import React from 'react'
import products from './Product.json'
import Product from './Product'

function ProductList() {
  return (
    <>
    <div className='container prouctlist'>
        <div className='row'>
                {products.map((Productobj)=>(
                <Product Productobj1 = {Productobj}></Product>
            ))} 
        </div>
    </div>           
    </>
  )
}

export default ProductList