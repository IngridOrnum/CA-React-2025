import './index.css'
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {StarRating} from "./components/Rating/StarRating.jsx";

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
                {products.map((product) => {
                    return (
                        <>
                            <div className={"border border-black w-fit p-4"}>
                                <img className={"w-60 h-60 object-cover"} src={product.image.url}
                                     alt={product.image.alt}/>
                                <p className={"font-bold"}>{product.title}</p>
                                <p>{product.price}</p>
                                <p>{product.discountedPrice}</p>
                                <div className={"flex gap-4"}>
                                    <StarRating rating={product.rating}/>
                                    <p>{product.rating}</p>
                                </div>
                                <Link to={"/single-product/" + product.id} key={product.id}>
                                    <button className={"cursor-pointer border border-black p-1"}>View Product</button>
                                </Link>
                            </div>
                        </>

                    )
                })}
            </div>
        </>
    )
}

export default App
