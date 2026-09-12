import React from 'react'

function ItemCard({heading, name, image, price}) {
  return (
    <div className="item-card">
        <h1 className="item-card-heading">{heading}</h1>
        <div className="item-card-image">
          <img
            src={image}
            width="400px"
          ></img>
        </div>

        <h2 className="item-card-title">Car Name: {name}</h2>
        <h2 className="item-card-price">Price: {price}</h2>
        <button>Add to cart</button>
      </div>
  )
}

export default ItemCard