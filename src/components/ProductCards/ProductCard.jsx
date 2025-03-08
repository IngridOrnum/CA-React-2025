import PriceDisplay from "../PriceDisplay/PriceDisplay.jsx";
import {StarRating} from "../Rating/StarRating.jsx";
import {Link} from "react-router-dom";

export function ProductCard ({product}) {
    return (
        <>
            <div key={product.id} className={"w-fit p-4 flex flex-col gap-2 items-center"}>
                <div className={"w-60 h-72 rounded overflow-hidden"}>
                    <img className={" h-full w-full rounded transition-all duration-300 ease-in-out object-cover hover:scale-[1.2]"} src={product.image.url}
                         alt={product.image.alt}/>
                </div>
                <p className={"font-bold"}>{product.title}</p>
                <PriceDisplay discountPrice={product.discountedPrice} price={product.price} />
                <div className={"flex gap-2 items-center justify-center"}>
                    <StarRating rating={product.rating}/>
                    <p>({product.reviews.length})</p>
                </div>
                <Link to={`/single-product/${product.id}`}>
                    <button className={"flex rounded-full cursor-pointer border border-black px-3 py-1 hover:text-white hover:bg-black justify-center items-center mx-auto"}>View Product</button>
                </Link>
            </div>
        </>
    )
}