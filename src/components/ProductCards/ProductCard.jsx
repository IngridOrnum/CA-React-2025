import PriceDisplay from "../PriceDisplay/PriceDisplay.jsx";
import {StarRating} from "../Rating/StarRating.jsx";
import {Link} from "react-router-dom";

export function ProductCard ({product}) {
    return (
        <>
            <div key={product.id} className={"border border-black w-fit p-4"}>
                <img className={"w-60 h-60 object-cover"} src={product.image.url}
                     alt={product.image.alt}/>
                <p className={"font-bold"}>{product.title}</p>
                <PriceDisplay price={product.price} discountPrice={product.discountedPrice} />
                <div className={"flex gap-4"}>
                    <StarRating rating={product.rating}/>
                    <p>{product.rating}</p>
                </div>
                <Link to={`/single-product/${product.id}`}>
                    <button className={"cursor-pointer border border-black p-1"}>View Product</button>
                </Link>
            </div>
        </>
    )
}