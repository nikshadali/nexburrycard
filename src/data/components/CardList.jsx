import React, { useState } from 'react'

const CardList = ({products, increseQty}) => {

 
  return (
    <div className='container mt-5'>
      <div className="row">
        <h2 className='top-deal'>TOP DEALS</h2>
        {
          products.map(product => (
            <div className="col-lg-3" key={product.id}>
        <div className="card mb-3 mb-lg-1">
  <img src={product.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.desc}</p>
    <h6>Rs {product.price}</h6>
    <button className="btn btn-blue" onClick={()=> increseQty(product.id)}>Add to Card <span className='totalqty'>{product.qty}</span></button>
  </div>
  <div className='ribbon'>Special Offer</div>
</div>
        </div>
          ))
        }
        
      </div>
      
    </div>
  )
}

export default CardList
