import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

export function SingleProduct() {

    const {id} = useParams();

    const [product, setProduct] = useState(false);

    const url = "https://v2.api.noroff.dev/online-shop/";

    useEffect(() => {
        async function getSingleProduct() {
            const res = await fetch(url + id);
            const data = await res.json();
            setProduct(data.data);
        }

        getSingleProduct();
    }, []);
    return (
        <>
            <h1>Single Product</h1>
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.image.url} alt={product.image.url}/>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </>
    )
}