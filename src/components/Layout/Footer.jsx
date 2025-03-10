import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <footer className={"flex flex-col items-center justify-center p-10 bg-[#55220020]"}>
                <div className={"flex flex-col gap-10 items-center"}>
                    <Link className={"font-logo text-2xl text-[#552200]"} to={"/"}>lux shop</Link>
                    <div className={"flex flex-col gap-6 items-center font-title-bold font-light text-xl"}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <p className={"font-title-bold font-light"}>{`© lux shop ${year}. All Rights Reserved.`}</p>
                </div>
            </footer>
        </>
    )
}