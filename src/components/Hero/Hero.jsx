import {Link} from "react-router-dom";

export function Hero({product}) {
    return (
        <div className={"flex flex-col md:flex-row items-center justify-center h-[92vh] bg-gradient-to-b from-[#E6E9F1] to-[#D5C4D4]"}>
            <div className={"w-full h-1/2 md:w-1/2 md:h-full overflow-hidden"}>
                <img src={product.image.url} alt={product.title}
                     className={"w-full h-full object-cover"}/>
            </div>
            <div className={"h-1/2 gap-4 md:w-1/2 py-6 flex flex-col md:justify-center items-center md:py-0 md:gap-10"}>
                <div className={"flex flex-col md:gap-8 items-center"}>
                    <div className={"flex gap-2 items-center"}>
                        <p className={"font-title-light text-custom-pink text-lg md:text-2xl lg:text-3xl"}>Exclusive Sale!</p>
                        <img src="/assets/sparkling.png" alt="Sparkle icon"
                             className={"w-4 h-4 md:w-8 md:h-8 object-cover bottom-10"}/>
                    </div>
                    <h1 className={"font-title-bold text-custom-pink text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic flex wrap"}>{product.title}</h1>
                </div>
                <div className={"flex flex-col md:gap-4 items-center"}>
                    <div className={"flex items-center gap-2 font-title-light text-custom-pink text-lg md:text-lg lg:text-xl"}>
                        <p>Was:</p>
                        <p>${product.price}</p>
                    </div>
                    <div className={"flex items-center gap-3 font-title-bold text-custom-pink text-xl md:text-2xl lg:text-3xl"}>
                        <p>Now:</p>
                        <p>${product.discountedPrice}</p>
                    </div>
                </div>

                <Link to={`/single-product/${product.id}`}>
                    <button
                        className={"uppercase rounded-full px-6 py-2 cursor-pointer font-custom-text font-light text-white bg-custom-black text-lg md:text-xl hover:text-custom-black hover:bg-white"}>
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    )
}