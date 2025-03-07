import {Link} from "react-router-dom";

export function Hero ({product}) {
    return (
        <div className={"flex items-center justify-center h-[90vh] bg-gradient-to-b from-[#E6E9F1] to-[#D5C4D4]"}>
            <div className={"w-1/2 h-full overflow-hidden"}>
                <img src={product.image.url} alt={product.title}
                     className={"w-full h-full object-cover"}/>
            </div>
            <div className={"w-1/2 flex flex-col items-center"}>
                <p className={"text-gray"}>Exclusive Sale!</p>
                <h1 className={"text-3xl font-bold"}>{product.title}</h1>
                <div className={"flex flex-col items-center"}>
                    <p>Was:</p>
                    <p>{product.price}</p>
                </div>
                <div className={"flex flex-col items-center"}>
                    <p>Now:</p>
                    <p>{product.discountedPrice}</p>
                </div>
                <Link to={`/single-product/${product.id}`}>
                    <button className={"border rounded-full px-4 py-2 cursor-pointer"}>Buy Now!</button>
                </Link>
            </div>
        </div>
    )
}