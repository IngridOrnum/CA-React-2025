import {Link} from "react-router-dom";

export function Header () {
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
            <div className={"flex items-center gap-6"}>
                <img className={"h-6 w-6 cursor-pointer"}
                     src={"../../public/assets/search-interface-symbol.png"} alt={"Search Symbol"}/>
                <img className={"h-8 w-8 cursor-pointer"}
                     src={"../../public/assets/shopping-bag.png"} alt={"Shopping Bag"}/>
            </div>
        </header>
        </>
    )
}