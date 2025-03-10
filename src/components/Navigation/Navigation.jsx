import {Link} from "react-router-dom";

export default function Navigation({ isOpen, setIsOpen }) {
    return (
        <>
            <nav className={"hidden md:flex gap-6 text-xl font-title-bold font-light"}>
                <Link className={"relative ..."} to={"/"}>Home</Link>
                <Link className={"relative ..."} to={"/contact"}>Contact</Link>
            </nav>
            <img className={"w-10 h-10 md:hidden cursor-pointer"} src="/assets/hamburger-menu.png" alt="Hamburger Menu Icon"
                 onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <div className="mobile-nav">
                    <div className="fixed inset-0 bg-[#72727280] z-40"></div>
                    <div className="flex flex-col gap-3 font-title-bold text-2xl font-light bg-white p-6 absolute h-[100vh] items-center top-full left-0 right-0 z-50 shadow-md md:hidden">
                        <div className={"flex w-full justify-between px-2 mb-4 text-xl"}>
                            <p className={"font-title-bold font-light text-custom-black"}>Menu</p>
                            <button className={"font-light cursor-pointer font-title-bold hover:font-bold"}
                                    onClick={() => setIsOpen(!isOpen)}>X</button>
                        </div>
                        <div className={"w-full bg-custom-gray h-[1px]"}></div>
                        <Link className="nav-link py-2" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link className="nav-link py-2" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </>
    );
}