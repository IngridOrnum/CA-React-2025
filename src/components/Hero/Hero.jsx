
export function Hero ({product}) {
    return (
        <div className={"flex items-center justify-center"}>
            <img src={product.image.url} alt={product.title}/>
            <div>
                <h1>{product.title}</h1>
            </div>
        </div>
    )
}