import {useParams} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import {CartContext} from "../context/Cart.jsx";
import {StarRating} from "../components/Rating/StarRating.jsx";
import PriceDisplay from "../components/PriceDisplay/PriceDisplay.jsx";

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
                    <PriceDisplay price={product.price} discountPrice={product.discountedPrice} />
                    <div className={"flex gap-4"}>
                        <StarRating rating={product.rating}/>
                        <p>{product.rating}</p>
                    </div>
                    <div className={"flex gap-4"}>
                        <p>Tags:</p>
                        {product.tags.map((tag, index) => {
                            return (
                                <div key={index} className={"tag"}>{tag}</div>
                            )
                        })}
                    </div>
                    <p>{product.description}</p>
                    <button className={"border p-1 cursor-pointer"}
                    onClick={() => addToCart ({...product, price: product.discountedPrice})}>Add to cart</button>
                    <div>
                        <h2 className={"font-bold"}>Reviews:</h2>
                        {product.reviews && product.reviews.map ((review) => {
                            return (
                                <div key={product.id}>
                                <p>{review.username}</p>
                                    <p>Rating{review.rating}</p>
                                    <p>{review.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </>
    )
}