import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {CartContext} from "../../context/Cart.jsx";

export function Cart () {
    const {cartItems} = useContext(CartContext);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Link to={"/checkout"}
                  className={"h-10 w-10 relative rounded full flex justify-center items center"}>
                <img className={"h-8 w-8 cursor-pointer"}
                     src="/assets/shopping-bag.png" alt={"Shopping Bag"}/>
                <span
                    className={"absolute text-white top-2/3 right-1/2 bg-red-500 text-sm h-5 w-5 rounded full flex justify-center items-center"}>
                    {cartItemCount}
                    </span>
            </Link>
        </>
    )
}