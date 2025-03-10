import {useContext} from "react";
import {CartContext} from "../context/Cart.jsx";
import {Link} from "react-router-dom";

export function Checkout() {
    const {cartItems, getCartTotal, clearCart, removeFromCart} = useContext(CartContext);
    const total = getCartTotal();

    return (
        <div className={"my-10 font-title-bold"}>
            <h1 className={"font-medium text-2xl flex justify-center mb-10 md:text-3xl lg:text-4xl"}>Checkout</h1>
            <div className={"bg-white flex flex-col items-center w-fit mx-auto p-5 font-light rounded min-w-[322px]"}>
                {cartItems.length > 0 ? (
                    <>
                        <ul className={"flex flex-col gap-4"}>
                            {cartItems.map(item => (
                                <li key={item.id} className={"flex flex-col"}>
                                    <div className={"flex gap-4"}>
                                        <img className={"h-40 w-30 object-cover"} src={item.image.url}
                                             alt={item.image.alt}/>
                                        <div className={"text-lg mt-2 flex flex-col gap-4"}>
                                            <div>
                                                <p className={"font-medium text-xl"}>{item.title}</p>
                                                <p className={"text-gray-500 font-light"}>${item.price.toFixed(2)}</p>
                                                <p className={"text-gray-500 font-light"}>Quantity: {item.quantity}</p>
                                            </div>
                                            <div className={"underline underline-offset-4 cursor-pointer"}
                                                 onClick={() => removeFromCart(item)}
                                            >Remove
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"h-[1px] w-full bg-gray-200 mt-4"}></div>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        <p className={"text-lg py-10"}>Your cart is currently empty.</p>
                        <div className={"h-[1px] w-full bg-gray-200 mt-4"}></div>
                    </>
                )}
                <div className={"flex justify-between w-full font-medium text-xl px-2 py-5"}>
                    <div>Total</div>
                    <div>{total.toFixed(2)}</div>
                </div>
                <div className={"h-[1px] w-full bg-gray-200"}></div>
                <Link to={"/checkout-success"}>
                    <button
                        className={"flex mt-8 mb-5 font-title-bold font-light rounded-full cursor-pointer border border-black px-5 py-1 hover:text-white hover:bg-black justify-center items-center mx-auto text-lg"}
                        onClick={() => {
                            clearCart();
                            localStorage.removeItem('cartItems')
                        }}>Confirm Order
                    </button>
                </Link>
            </div>
        </div>
    )
}