import React from "react";

const PriceDisplay = ({ price, discountPrice}) => {
    const priceStyle = {
        textDecoration: discountPrice < price ? 'line-through' : 'none',
        marginRight: '10px',
        color: 'black'
    };

    const discountedPriceStyle = {
        color: 'red'
    };

    return (
        <div>
            {discountPrice < price ? (
             <>
                 <span style={priceStyle}>{price}</span>
                 <span style={discountedPriceStyle}>{discountPrice}</span>
             </>
            ) : (
                <span style={priceStyle}>{price}</span>
            )}

        </div>
    )
}

export default PriceDisplay;