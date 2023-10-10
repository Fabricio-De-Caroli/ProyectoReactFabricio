import React from 'react'
import {products} from "../Productos"
import { useParams } from 'react-router-dom'
import ButtonDetail from "../components/ButtonDetail"
import ItemCount from './ItemCount'
function ItemDetailContainer() {
  const {id} = useParams()
  const itemDetail = products.find(x => x.id == id)
  if(!itemDetail) return null
  return (
    <>
      <div className="card mb-3" style={{display:'flex', justifyContent:"center"}}>
        <img src={products[id - 1].src} class="card-img-top" alt={products[id - 1].alt} style={{width: "25rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{products[id-1].title}</h5>
          <p className="card-text">{products[id-1].fullDescription}</p>
          <p className="card-text">Price: {products[id-1].price}USD</p>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center', flexDirection: 'column'}}>
        <ItemCount/>
        <ButtonDetail/>
      </div>
    </>
  )
}

export default ItemDetailContainer