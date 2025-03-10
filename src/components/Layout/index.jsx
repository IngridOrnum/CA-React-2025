import {Footer} from "./Footer.jsx";
import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";

export function Layout() {
    return (
        <>
            <div className={"min-h-screen flex flex-col"}>
                <Header/>
                <main className={"grow bg-[#F7F7F7]"}>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>

    )
}