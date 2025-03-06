
export function Hero ({product}) {
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image.url} alt={product.title}/>
        </div>
    )
}