import { useContext } from "react"
import CartContext from "../context/cart.context"
import { Link } from "react-router-dom";

function cart(){
    const {cart} = useContext(CartContext);
    if(cart.items.length === 0) return <text>El carrito esta vacio</text>

    return(
        <div>
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Cantidad</th>
                <th scope="col">Productos</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Precio Final</th>
              </tr>
            </thead>
            <tbody>
            {cart.items.map(({item, quantity})=>(
              <tr key={item.id}>
                <th scope="row">{quantity}</th>
                <td>{item.Title}</td>
                <td>${item.Price}</td>
                <td>{item.Price * quantity}</td>
              </tr>
            ))}
            </tbody>
          </table>
          <div style={{display:"flex", justifyContent: "center"}}>
            <Link to={"/Checkout"} className="btn btn-primary" style={{width:"200px"}}>Finalizar Compra</Link>
          </div>
        </div>
    )}

export default cart