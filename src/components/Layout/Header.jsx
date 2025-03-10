import {Link} from "react-router-dom";
import {Search} from "../Search/Search.jsx";
import {Cart} from "../Cart/Cart.jsx";
import React, {useState} from "react";
import Navigation from "../Navigation/Navigation.jsx";

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className={"flex justify-between py-4 px-6 items-center sticky top-0 bg-white z-10"}>
                <div className={"flex w-full justify-between items-center"}>
                    <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
                    {/*<div className={"relative w-full items-center justify-center"}>*/}
                        <Link className={"font-logo text-xl uppercase tracking-widest absolute right-0 left-0 w-fit mx-auto"} to={"/"}>
                            lux shop
                        </Link>
                    {/*</div>*/}
                    <div className={"flex items-center gap-6"}>
                        <Search/>
                        <Cart/>
                    </div>
                </div>

                {isOpen && (
                    <>
                        <div className="fixed inset-0 bg-[#72727280] z-40"></div>
                        <div
                            className="flex flex-col gap-3 font-title-bold text-2xl font-light bg-white p-6 absolute h-[100vh] items-center top-full left-0 right-0 z-50 shadow-md md:hidden">
                            <div className={"flex w-full justify-between px-2 mb-4 text-xl"}>
                                <p className={"font-title-bold font-light text-custom-black"}>Menu</p>
                                <button className={"font-light cursor-pointer font-title-bold hover:font-bold"}
                                        onClick={() => setIsOpen(!isOpen)}>
                                    X
                                </button>
                            </div>
                            <div className={"w-full bg-custom-gray h-[1px]"}></div>
                            <Link className="nav-link py-2" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link className="nav-link py-2" to="/contact"
                                  onClick={() => setIsOpen(false)}>Contact</Link>
                        </div>
                    </>
                )}
            </header>
        </>
    )
}