import {Link} from "react-router-dom";
import {Search} from "../Search/Search.jsx";
import {Cart} from "../Cart/Cart.jsx";

export function Header() {

    return (
        <>
            <header className={"flex justify-between p-4 items-center"}>
                <div className={"flex gap-6"}>
                    <Link className={"font-bold text-lg"} to={"/"}>Lux Shop</Link>
                    <nav className={"flex gap-4"}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </nav>
                </div>
                <div className={"flex items-center gap-6 relative"}>
                    <Search/>
                    <Cart/>
                </div>
            </header>
        </>
    )
}