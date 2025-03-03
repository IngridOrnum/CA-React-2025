import {Link} from "react-router-dom";

export function Footer() {
    return (
        <>
            <footer className={"flex justify-center p-10 bg-gray-200"}>
                <Link className={"font-bold text-lg"} to={"/"}>Lux Shop</Link>
            </footer>
        </>
    )
}