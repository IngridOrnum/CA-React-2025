import {useParams} from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import {CartContext} from "../context/Cart.jsx";
import {StarRating} from "../components/Rating/StarRating.jsx";
import PriceDisplay from "../components/PriceDisplay/PriceDisplay.jsx";

export function SingleProduct() {

    const {id} = useParams();
    const {addToCart} = useContext(CartContext);

    const [product, setProduct] = useState(false);
    const [isDescriptionVisible, setIsDescriptionIsVisible] = useState(false);
    const [isReviewsVisible, setIsReviewsVisible] = useState(false);

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
                <div className={"mb-10 md:flex md:m-6"}>
                    <img className={"h-96 w-full object-cover mx-auto md:w-1/2 lg:h-[500px] lg:w-2/3 xl:lg:h-[600px]"} src={product.image.url} alt={product.image.url}/>
                    <div className={"flex flex-col items-center m-4 gap-2 md:w-1/2 lg:w-1/3"}>
                        <h1 className={"font-title-bold text-3xl"}>{product.title}</h1>
                        <div className={"flex gap-1 items-center"}>
                            <StarRating rating={product.rating}/>
                            <p>({product.reviews.length})</p>
                        </div>
                        <PriceDisplay price={product.price} discountPrice={product.discountedPrice}/>
                        <button className={"flex font-title-bold font-light rounded-full cursor-pointer border border-black px-5 py-1 hover:text-white hover:bg-black justify-center items-center"}
                                onClick={() => addToCart({...product, price: product.discountedPrice})}>
                            Add to cart
                        </button>

                        <div className={"font-title-bold font-light text-custom-black w-full flex flex-col gap-4"}>
                            <div>
                                <div className={"cursor-pointer flex justify-between"}
                                     onClick={() => setIsDescriptionIsVisible(!isDescriptionVisible)}>
                                    <p className={"font-bold"}>Description</p>
                                    <img className={"h-5 w-5"} src="/assets/down-arrow.png" alt="Down Arrow"/>
                                </div>
                                {isDescriptionVisible &&
                                    <div className={"flex flex-col gap-3 my-4"}>
                                        <p>{product.description}</p>
                                        <div className={"flex gap-4"}>
                                            {product.tags.map((tag, index) => {
                                                return (
                                                    <div key={index} className={"tag bg-gray-200 text-gray-600 px-2 py-1"}>{tag}</div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className={"w-full bg-custom-gray h-[1px]"}></div>
                            <div>
                                <div className={"cursor-pointer flex justify-between"}
                                    onClick={() => setIsReviewsVisible(!isReviewsVisible)}>
                                    <div className={"flex font-bold gap-2"}>
                                        <p>Reviews</p>
                                        <p>({product.reviews.length})</p>
                                    </div>
                                    <img className={"h-5 w-5"} src="/assets/down-arrow.png" alt="Down Arrow"/>
                                </div>
                                {isReviewsVisible &&
                                    <div className={"my-4"}>
                                        {product.reviews && product.reviews.map((review) => {
                                            return (
                                                <div key={product.id} className={"font-title-bold flex flex-col gap-2"}>
                                                    <div className={"flex gap-2"}>
                                                        <p className={"font-bold"}>{review.username}</p>
                                                        <StarRating rating={review.rating}/>
                                                    </div>
                                                    <p>{review.description}</p>
                                                    <div className={"w-full bg-[#9F9F9F80] h-[1px] my-2"}></div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
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