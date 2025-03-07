import {Link} from "react-router-dom";
import {Search} from "../Search/Search.jsx";
import {Cart} from "../Cart/Cart.jsx";

export function Header() {

    return (
        <>
            <header className={"flex justify-between p-4 items-center"}>
                <div className={"flex w-full justify-between"}>
                    <nav className={"flex gap-4"}>
                        {/*<span>Beauty</span>*/}
                        {/*<span>Fashion</span>*/}
                        {/*<span>Accessories</span>*/}
                        {/*<span>Electronics</span>*/}
                        <Link to={"/"}>Home</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </nav>

                <Link className={"font-bold text-lg"} to={"/"}>Lux Shop</Link>
                <div className={"flex items-center gap-6 relative"}>
                    <Search/>
                    <Cart/>
                </div>
                </div>
            </header>
        </>
    )
}