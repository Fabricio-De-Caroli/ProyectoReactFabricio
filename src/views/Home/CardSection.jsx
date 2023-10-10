import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../Productos.js'



function CardSection() {
  const [products, setProducts] = useState([])
  const {id} = useParams()
  async function fetchingData(){
    try{
      const datos = await useProducts()
      return datos
    }catch(err){
      console.log(err)
    }
  }

fetchingData().then(datos => setProducts(datos))
  return (
    <>
    	{
      	products.map( ( x, index ) =>
          <div className="card" key={index} style={{width: "18rem"}}>
            <img src={x.src} className="card-img-top" alt= { x.title }/>
            <div className="card-body">
                <h5 className="card-title">{ x.title }</h5>
                <p className="card-text">{x.description}</p>
                <Link to= {`/category/${ x.id}`} className="btn btn-primary">more info</Link>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CardSection