import './index.css'
import {useState, useEffect} from "react";
import {ProductCard} from "./components/ProductCards/ProductCard.jsx";
import {Hero} from "./components/Hero/Hero.jsx";

const url = "https://v2.api.noroff.dev/online-shop/";

export function App() {
    const [products, setProducts] = useState([]);
    const [heroProduct, setHeroProduct] = useState(null);

    useEffect(() => {
        async function getProducts() {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setProducts(data.data);
            const specificProduct = data.data.find(product => product.id === '5aa2e388-8dfb-4d70-b031-3732d8c6771a');
            setHeroProduct(specificProduct);
        }
        getProducts();
    }, []);

    return (
        <>
            {heroProduct && <Hero key={heroProduct.id} product={heroProduct}/>}
            <h2 className={"font-bold text-2xl flex justify-center mb-10"}>Products</h2>
            <div className={"flex flex-wrap gap-4 justify-center"}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                    ))}
            </div>
        </>
    )
}

export default App
