import CartIcon from "./CartIcon";
import CartItems from "../../context/CartProvider";
import { useContext } from "react";
import CartContext from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
    const {cart} = useContext(CartContext);
    const navigate = useNavigate();

    return(
        <div className="rounded-circle p-3 position-relative">
            <CartIcon />
            <CartItems number={7}/>
            <span>Elementos en el carrito: {cart.items.length}</span>
            <span>Total: ${cart.total}</span>
            <button type="button" onClick={() => navigate('/cart')} className="btn btn-primary">Ver Carrito</button>
        </div>
    )
}
export default CartContainer;