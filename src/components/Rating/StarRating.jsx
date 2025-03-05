import React from "react";

export function StarRating({rating}) {
    const fullStar = Math.floor(rating);
    const halfStar = (rating % 1) >= 0.5 ? 1 : 0;
    const emptyStar = 5 - fullStar - halfStar;

    return (
        <div className={"StarRating"}>
            {Array(fullStar).fill().map((_, index) => (
                <span key={index} className={"star"}>★</span>
            ))}
            {halfStar === 1 && (
                <span key={"half-star"} className={"star half-star"}>★</span>
            )}
            {Array(emptyStar).fill().map((_, index) => (
                <span key={index + fullStar + halfStar} className={"star empty-star"}>★</span>
            ))}
        </div>
    )
}