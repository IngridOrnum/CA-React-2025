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
                 src="/assets/search-interface-symbol.png" alt={"Search Symbol"}
                 onClick={() => setIsVisible(!isVisible)}
            />
            {isVisible &&
                <div className={"bg-amber-200 min-h-screen absolute right-0 top-14 p-4"}>
                    <button className={"font-bold text-lg cursor-pointer border p-2"}
                            onClick={() => setIsVisible(!isVisible)}>
                        X
                    </button>
                    <label htmlFor="search"></label>
                    <input
                        value={query}
                        type={"search"}
                        id={"search"}
                        className={"border p-1 bg-white mt-10"}
                        onChange={e => setQuery(e.target.value)}
                        placeholder={"Search products.."}
                    />
                    {query && filteredItems.length > 0 && (
                        <div>
                            {filteredItems.map(item => (
                                <div key={item.id} onClick={() => handleItemClick(item.id)} className={"cursor-pointer"}>
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    )}
                    <button className={"border p-2 cursor-pointer"}>Show All Results</button>
                </div>
            }
        </>
    )
}