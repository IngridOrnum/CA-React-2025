import './index.css'
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {StarRating} from "./components/Rating/StarRating.jsx";
import PriceDisplay from "./components/PriceDisplay/PriceDisplay.jsx";
import {ProductCard} from "./components/ProductCards/ProductCard.jsx";

const url = "https://v2.api.noroff.dev/online-shop/";

export function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setProducts(data.data);
        }
        getProducts();
    }, []);

    return (
        <>
            <h1 className={"font-bold text-2xl flex justify-center mb-10"}>Products</h1>
            <div className={"flex flex-wrap gap-4 justify-center"}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                    ))}
            </div>
        </>
    )
}

export default App
