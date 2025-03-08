import React from "react";

const PriceDisplay = ({ price, discountPrice}) => {
    return (
        <div>
            {discountPrice < price ? (
             <div className={"flex gap-4 my-3"}>
                 <span className={"font-custom-text font-medium text-custom-black"}>${discountPrice}</span>
                 <span className={"font-custom-text font-light text-custom-gray line-through"} >${price}</span>
             </div>
            ) : (
                <span className={"flex font-custom-tex font-medium text-custom-black my-3"}>${price}</span>
            )}
        </div>
    )
}

export default PriceDisplay;