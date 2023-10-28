import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as bootstrap from 'bootstrap'
import { getFirestore, collection, getDocs, doc} from "firebase/firestore";

function CardSection() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const db = getFirestore();

    const itemref = collection(db, "Items")
    getDocs(itemref).then((snapshot) => {
      if(snapshot.size === 0){
        console.log("No results");
      }
      setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
  },[])
  return (
    <>
    	{
      	items.map( ( x, index ) =>
          <div className="card" key={index} style={{width: "18rem"}}>
            <img src={x.Source} className="card-img-top" alt= {x.Title }/>
            <div className="card-body">
                <h5 className="card-title">{ x.Title }</h5>
                <p className="card-text">{x.Description}</p>
                <Link to= {`/category/${ x.id}`} className="btn btn-primary">more info</Link>
            </div>
          </div>
        )
      }
    </>
  )
    }
export default CardSection