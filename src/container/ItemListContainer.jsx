import React, {useState, useEffect} from 'react'
import ItemList from '../components/Items/ItemList.jsx'
import './ItemListContainer.css'
import loader from '../images/Spin.svg'

const ItemListContainer = () => {
  const [arrayItems, setArrayItems] = useState([])

  useEffect(()=>{
    const products = [
      {
        "id" : 1,
        "code" : "P0001",
        "name" : "Joystick",
        "image" : "../images/joystick.jpg",
        "price" : 5000,
        "stock" : 5,
      },{
        "id" : 2,
        "code" : "P0002",
        "name" : "Auricular",
        "image" : "../images/auricular.png",
        "price" : 2000,
        "stock" : 4,
      },{
        "id" : 3,
        "code" : "P0003",
        "name" : "Teclado",
        "image" : "../images/teclado.jpg",
        "price" : 4000,
        "stock" : 7,
      }
    ]
  
    const lists = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000 )
    })
    lists.then((res) => {
      setArrayItems(res)
    },(rej)=>{
      console.log("rechazada-->",rej)
    })
    .catch(()=>{
      console.log("Se produjo un error")
    })
    .finally(()=>{
      console.log("El control ha finalizado")
    })
  },[])
  

  return ( 
    <>
      <div className="container">
        <div className="row catalog-grid">
          {arrayItems.length > 0 ? <ItemList products={arrayItems}/> : <img src={loader} className="loader"/>}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer