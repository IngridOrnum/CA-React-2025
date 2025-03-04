import {Link} from "react-router-dom";
import {CartContext} from "../../context/Cart.jsx";
import React, {useContext, useState} from "react";

export function Header() {
    const {cartItems} = useContext(CartContext);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <header className={"flex justify-between p-4 items-center"}>
                <div className={"flex gap-6"}>
                    <Link className={"font-bold text-lg"} to={"/"}>Lux Shop</Link>
                    <nav className={"flex gap-4"}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                    </nav>
                </div>
                <div className={"flex items-center gap-6 relative"}>
                    <img className={"h-6 w-6 cursor-pointer"}
                         src="../../../public/assets/search-interface-symbol.png" alt={"Search Symbol"}
                         onClick={() => setIsVisible(!isVisible)}
                    />
                    <Link to={"/checkout"}
                          className={"h-10 w-10 relative rounded full flex justify-center items center"}>
                        <img className={"h-8 w-8 cursor-pointer"}
                             src="../../../public/assets/shopping-bag.png" alt={"Shopping Bag"}/>
                        <span
                            className={"absolute text-white top-2/3 right-1/2 bg-red-500 text-sm h-5 w-5 rounded full flex justify-center items-center"}>
                    {cartItemCount}
                    </span>
                    </Link>
                    {isVisible &&
                        <div className={"bg-amber-200 min-h-screen absolute right-0 top-14 p-4"}>
                            <button className={"font-bold text-lg cursor-pointer border p-2"}
                                    onClick={() => setIsVisible(!isVisible)}>
                                X
                            </button>
                            <label htmlFor="search"></label>
                            <input id={"search"} className={"border p-1 bg-white mt-10"}/>
                            <button className={"border p-2 cursor-pointer"}>Show Results</button>
                        </div>
                    }
                </div>
            </header>
        </>
    )
}