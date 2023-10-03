import { useState } from "react";
import {products} from "../../src/Productos"
import { useParams } from "react-router-dom";

const ItemCount = () => {
const [count, setCount] = useState(0);
const {id} =useParams()

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
            <button type="button" class="btn btn-primary" onClick={decrement}>-</button>
            <button type="button" class="btn btn-outline-secondary">{count}</button>
            <button type="button" class="btn btn-primary" onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount;