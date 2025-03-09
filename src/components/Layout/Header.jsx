import {Link} from "react-router-dom";
import {Search} from "../Search/Search.jsx";
import {Cart} from "../Cart/Cart.jsx";

export function Header() {

    return (
        <>
            <header className={"flex justify-between py-4 px-6 items-center sticky top-0 bg-white z-10"}>
                <div className={"flex w-full justify-between items-center"}>
                    <nav className={"flex gap-6 text-xl font-title-bold font-light"}>
                        {/*<span>Beauty</span>*/}
                        {/*<span>Fashion</span>*/}
                        {/*<span>Accessories</span>*/}
                        {/*<span>Electronics</span>*/}
                        <Link className={"relative after:bg-custom-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"} to={"/"}>Home</Link>
                        <Link className={"relative after:bg-custom-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"} to={"/contact"}>Contact</Link>
                    </nav>

                <Link className={"font-logo text-xl uppercase tracking-widest"} to={"/"}>lux shop</Link>
                <div className={"flex items-center gap-6 relative"}>
                    <Search/>
                    <Cart/>
                </div>
                </div>
            </header>
        </>
    )
}