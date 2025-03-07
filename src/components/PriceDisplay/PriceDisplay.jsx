import React from "react";

const PriceDisplay = ({ price, discountPrice}) => {
    const priceStyle = {
        textDecoration: discountPrice < price ? 'line-through' : 'none',
        marginRight: '10px',
        color: '#262626'
    };

    const discountedPriceStyle = {
        color: 'blue',
        fontWeight: 'bold'
    };

    return (
        <div>
            {discountPrice < price ? (
             <div className={"flex gap-4"}>
                 <span style={discountedPriceStyle}>${discountPrice}</span>
                 <span style={priceStyle}>${price}</span>
             </div>
            ) : (
                <span style={priceStyle}>${price}</span>
            )}

        </div>
    )
}

export default PriceDisplay;