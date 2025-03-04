import {useParams} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import {CartContext} from "../context/Cart.jsx";

export function SingleProduct() {

    const {id} = useParams();
    const {addToCart} = useContext(CartContext);

    const [product, setProduct] = useState(false);

    const url = "https://v2.api.noroff.dev/online-shop/";

    useEffect(() => {
        async function getSingleProduct() {
            const res = await fetch(url + id);
            const data = await res.json();
            setProduct(data.data);
        }

        getSingleProduct();
    }, [id]);
    return (
        <>
            {product ? (
                <div>
                    <h1 className={"font-bold text-2xl"}>{product.title}</h1>
                    <img className={"h-96 w-auto"} src={product.image.url} alt={product.image.url}/>
                    <p>Price: {product.price}</p>
                    <p>Sale: {product.discountedPrice}</p>
                    <button className={"border p-1 cursor-pointer"}
                    onClick={() => addToCart ({...product, price: product.discountedPrice})}>Add to cart</button>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </>
    )
}