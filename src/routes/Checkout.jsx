import {useContext} from "react";
import {CartContext} from "../context/Cart.jsx";
import {Link} from "react-router-dom";

export function Checkout() {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const total = getCartTotal();

return (
    <div>
        <h1 className={"font-bold text-2xl flex justify-center mb-10"}>Checkout</h1>
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    {item.title} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
                </li>
            ))}
        </ul>
        <h2>Total {total.toFixed(2)}</h2>
        <Link to={"/checkout-success"}>
            <button className={"border p-2 cursor-pointer"}
            onClick={() => {
                clearCart();
                localStorage.removeItem('cartItems')
            }}>Confirm Order</button>
        </Link>
    </div>
)
}