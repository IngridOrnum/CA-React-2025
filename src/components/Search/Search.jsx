import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const url = "https://v2.api.noroff.dev/online-shop/";

export function Search() {
    const [isVisible, setIsVisible] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const filteredItems = items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    const handleItemClick = (id) => {
        navigate(`/single-product/${id}`);
        setIsVisible(false);
    }

    useEffect(() => {
        async function getProducts() {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const data = await res.json();
                if (!data.data) throw new Error("Data not found in response");
                setItems(data.data);
            } catch {
                console.error("Failed to fetch items:", error)
            }
        }

        getProducts();
    }, []);

    return (
        <>
            <img className={"h-6 w-6 cursor-pointer"}
                 src="/assets/search-interface-symbol.png" alt="Search Symbol"
                 onClick={() => setIsVisible(!isVisible)}
            />
            {isVisible &&
                <>
                <div className="fixed inset-0 bg-[#72727280] z-40"></div>
                <div className={"bg-white h-[92vh] w-96 absolute -right-6 top-14 p-6 border border-custom-gray rounded overflow-auto z-50"}>
                    <div className={"flex justify-between items-center px-2 mb-6"}>
                        <p className={"font-title-bold font-light text-custom-black text-lg"}>Search</p>
                        <button className={"font-light text-lg cursor-pointer font-title-bold hover:font-bold"}
                                onClick={() => setIsVisible(!isVisible)}>
                            X
                        </button>
                    </div>
                    <div className={"w-full bg-custom-gray h-[1px]"}></div>
                    <label htmlFor="search"></label>
                    <div className={"flex items-center mt-6 bg-white border rounded w-full px-3 py-1 gap-2"}>
                        <img className={"h-3 w-3 "} src="/assets/search-interface-symbol.png" alt="Search Symbol"/>
                        <input
                            value={query}
                            type={"search"}
                            id={"search"}
                            className={"bg-white outline-none overflow-hidden font-title-bold font-light text-custom-black text-lg w-full"}
                            onChange={e => setQuery(e.target.value)}
                            placeholder={"Search products.."}
                            autoComplete={"off"}
                        />
                    </div>
                    <p className={"font-title-bold text-custom-black text-lg my-6"}>Products</p>
                    {query === '' && <p className={"font-title-bold font-light text-lg text-custom-black"}>Type your search to show product results.</p>}
                    {query && filteredItems.length > 0 && (
                        <div className={"flex flex-col gap-4"}>
                            {filteredItems.map(item => (
                                <div key={item.id} onClick={() => handleItemClick(item.id)}
                                     className={"cursor-pointer flex items-center gap-2 hover:bg-gray-100"}>
                                    <img src={item.image.url} alt={item.image.alt}
                                    className={"w-20 h-28 object-cover"}/>
                                    <div className={"font-title-bold text-custom-black text-lg"}>
                                        <p className={"font-medium"}>{item.title}</p>
                                        <p className={"font-light"}>${item.discountedPrice}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {query && filteredItems.length === 0 && (
                        <p className="font-title-bold font-light text-lg text-custom-black">No results for "{query}". Try again with different keywords.</p>
                    )}
                </div>
                </>
            }
        </>
    )
}