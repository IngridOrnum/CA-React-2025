import PriceDisplay from "../PriceDisplay/PriceDisplay.jsx";
import {StarRating} from "../Rating/StarRating.jsx";
import {Link} from "react-router-dom";

export function ProductCard ({product}) {
    return (
        <>
            <div key={product.id} className={"w-fit p-4 flex flex-col gap-2"}>
                <img className={"w-60 h-72 object-cover"} src={product.image.url}
                     alt={product.image.alt}/>
                <p className={"font-bold"}>{product.title}</p>
                <PriceDisplay discountPrice={product.discountedPrice} price={product.price} />
                <div className={"flex gap-2 items-center"}>
                    <StarRating rating={product.rating}/>
                    <p>({product.reviews.length})</p>
                </div>
                <Link to={`/single-product/${product.id}`}>
                    <button className={"rounded-full cursor-pointer border border-black px-3 py-1 hover:text-white hover:bg-blue-800 "}>View Product</button>
                </Link>
            </div>
        </>
    )
}