import './index.css'
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

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
            <h1>Products</h1>
            <div className={"flex flex-wrap gap-4 justify-center"}>
                {products.map((product) => {
                    return (
                        <Link
                            to={"/single-product/" + product.id}
                            key={product.id}>
                            <div className={"border border-black w-fit p-4 cursor-pointer"}>
                                <img className={"w-60 h-60 object-cover"} src={product.image.url}
                                     alt={product.image.alt}/>
                                <p className={"font-bold"}>{product.title}</p>
                                <p>{product.price}</p>
                                <p>{product.discountedPrice}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default App
