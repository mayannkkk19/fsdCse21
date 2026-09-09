import React from 'react'

export const ItemCard = ({name, image, price}) => {
  return (
    <div className="item-card">
        <h2 className="item-card-name">Name: {name}</h2>
        <div className="item-card-image">
            <img  src={image} width="200px" height="200px"/>
        </div>
        <h4 className="item-card-price">Price: {price}</h4>
    </div>
  )
}
