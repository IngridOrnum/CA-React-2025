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
                <div className={"md:flex md:m-6"}>
                    <img className={"h-96 w-full object-cover mx-auto"} src={product.image.url} alt={product.image.url}/>
                    <div className={"m-4"}>
                        <h1 className={"font-title-bold font-bold text-3xl"}>{product.title}</h1>
                        <div className={"flex gap-1 items-center"}>
                            <StarRating rating={product.rating}/>
                            <p>({product.reviews.length})</p>
                        </div>
                        <PriceDisplay price={product.price} discountPrice={product.discountedPrice}/>
                        <button className={"flex font-title-bold font-light rounded-full cursor-pointer border border-black px-5 py-1 hover:text-white hover:bg-black justify-center items-center"}
                                onClick={() => addToCart({...product, price: product.discountedPrice})}>
                            Add to cart
                        </button>

                        <div className={"font-title-bold font-light text-custom-black"}>
                            <div className={"flex gap-4"}>
                                {product.tags.map((tag, index) => {
                                    return (
                                        <div key={index} className={"tag bg-gray-200 text-gray-600 px-2 py-1"}>{tag}</div>
                                    )
                                })}
                            </div>
                            <p>{product.description}</p>
                            <div>
                                <h2 className={"font-bold"}>Reviews:</h2>
                                {product.reviews && product.reviews.map((review) => {
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
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </>
    )
}