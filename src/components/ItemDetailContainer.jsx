import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../context/cart.context'
import { getFirestore, collection, getDocs} from "firebase/firestore";


function ItemDetailContainer() {
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

  const {id} = useParams()
  const {addItem} = useContext(CartContext);
  const itemDetail = items.find(x => x.id == id)
  if(!itemDetail) return null

  const handleclick =(e) =>{
    e.preventDefault()
    addItem(itemDetail, 1)
  }
  return (
    <>
      <div className="card mb-3" style={{display:'flex', justifyContent:"center"}}>
        <img src={itemDetail.Source} className="card-img-top" alt={itemDetail.Alt} style={{width: "25rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{itemDetail.Title}</h5>
          <p className="card-text">{itemDetail.FullDescription}</p>
          <p className="card-text">Price: {itemDetail.Price}USD</p>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center', flexDirection: 'column'}}>
        <button type="button" className="btn btn-success" style={{width:"10rem", marginTop:"10px"}} onClick={handleclick}>Buy Game</button>
      </div>
    </>
  )
}

export default ItemDetailContainer