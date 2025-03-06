import React from "react";
import styles from './StarRating.module.css';

export function StarRating({ rating }) {
    const fullStar = Math.floor(rating);
    const halfStar = (rating % 1) >= 0.5 ? 1 : 0;
    const emptyStar = 5 - fullStar - halfStar;

    return (
        <div>
            {Array(fullStar).fill().map((_, index) => (
                <span key={index} className={styles.star}>★</span>
            ))}
            {halfStar === 1 && (
                <span key="half-star" className={`${styles.star} ${styles.halfStar}`}>★</span>
            )}
            {Array(emptyStar).fill().map((_, index) => (
                <span key={index} className={`${styles.star} ${styles.emptyStar}`}>★</span>
            ))}
        </div>
    );
}
