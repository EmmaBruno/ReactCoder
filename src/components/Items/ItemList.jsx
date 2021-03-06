import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

  return(
    <>
      {products.map(({id, image, name, code, price, stock}) =>
      <div key={id}>
        <Item img={image} title={name} code={code} price={price} stock={stock}/>
      </div>
      )}
    </>
  )
}

export default ItemList