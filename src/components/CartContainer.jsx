import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartContainer = () => {
    return(
        <div className="rounded-circle p-3 position-relative">
            <CartIcon />
            <CartItems number={7}/>
        </div>
    )
}
export default CartContainer;