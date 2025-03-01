// import {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
//
// const url = "https://v2.api.noroff.dev/online-shop";
//
// export function Products() {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         async function getProducts() {
//             const res = await fetch(url);
//             const data = res.json();
//             console.log(data);
//             setProducts(data.data);
//         }
//
//         getProducts();
//     }, []);
//
//     return (
//         <>
//             <h1>Products</h1>
//             <div>
//                 {products.map((product) => {
//                     return (
//                         <Link
//                             to={"/product/" + product.id}
//                             key={product.id}>
//                             <img src={product.image.url} alt={product.image.alt}/>
//                         </Link>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }