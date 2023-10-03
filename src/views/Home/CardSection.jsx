import React from 'react'
import {products} from "../../Productos.js"

function CardSection() {
  return (
    <>
    	{
      	products.map( ( x, index ) =>
          <div className="card" key={index} style={{width: "18rem"}}>
            <img src={x.src} className="card-img-top" alt= { x.title }/>
            <div className="card-body">
                <h5 className="card-title">{ x.title }</h5>
                <p className="card-text">{x.description}</p>
                <a href= {`/category/${ x.id }`} className="btn btn-primary">more info</a>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CardSection