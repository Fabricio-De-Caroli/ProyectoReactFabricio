import { useState, useContext } from "react";
import {products} from "../../src/Productos"
import { useParams } from "react-router-dom";
import CartContext from '../context/cart.context'

const ItemCount = () => {
const [count, setCount] = useState(1);
const {id} =useParams()
const {getCount} = useContext(CartContext);

const increment = ()=>{
    if(count == products[id - 1].stock){
        setCount(count);
    }else{
        setCount(count + 1);
    }
};

const decrement = () =>{
    
    if(count == 0){
        setCount(count);
    }else{
        setCount(count - 1);
    }
};

return (
    <div style={{display:"flex", justifyContent:"center"}}>
            <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
            <button type="button" className="btn btn-outline-secondary">{count}</button>
            <button type="button" className="btn btn-primary" onClick={increment}>+</button>
    </div>
    )
}

export default ItemCount;