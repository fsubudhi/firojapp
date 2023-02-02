import React from 'react'

function Product(props) {
  return (
    <>
        <div className='col-3 mb-4'>
        <div class="card" >
            <img className="card-img-top p-5" src={props.Productobj1.image} alt="" />
            <div className="card-body">
            <h6 className="card-title">{props.Productobj1.title}</h6>
            <p className="card-text text-capitalize">{props.Productobj1.category}</p>
            <p className="card-text price">Price: {props.Productobj1.price} $</p>
            <a href="#" className="btn btn-sm btn-danger">BUY NOW</a>
            </div>
        </div>
        </div>
    </>
  )
}

export default Product