import PriceDisplay from "../PriceDisplay/PriceDisplay.jsx";
import {StarRating} from "../Rating/StarRating.jsx";
import {Link} from "react-router-dom";

export function ProductCard({product}) {
    return (
        <>
            <div key={product.id} className={"w-fit p-4 flex flex-col gap-2 items-center"}>
                <div className={"w-60 h-72 rounded overflow-hidden"}>
                    <Link to={`/single-product/${product.id}`}>
                        <img
                            className={"cursor-pointer h-full w-full rounded transition-all duration-300 ease-in-out object-cover hover:scale-[1.2]"}
                            src={product.image.url}
                            alt={product.image.alt}/>
                    </Link>
                </div>
                <p className={"font-title-bold font-light text-xl mt-3"}>{product.title}</p>
                <div className={"flex gap-2 items-center justify-center"}>
                    <StarRating rating={product.rating}/>
                    <p className={"font-custom-text font-light text-sm tracking-widest"}>({product.reviews.length})</p>
                </div>
                <PriceDisplay discountPrice={product.discountedPrice} price={product.price}/>
                <Link to={`/single-product/${product.id}`}>
                    <button
                        className={"flex font-title-bold font-light rounded-full cursor-pointer border border-black px-5 py-1 hover:text-white hover:bg-black justify-center items-center mx-auto text-lg"}>
                        View Product
                    </button>
                </Link>
            </div>
        </>
    )
}