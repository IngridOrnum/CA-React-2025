import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from './App.jsx'
import {SingleProduct} from "./routes/SingleProduct.jsx";
import {Checkout} from "./routes/Checkout.jsx";
import {CheckoutSuccess} from "./routes/CheckoutSuccess.jsx";
import {Contact} from "./routes/Contact.jsx";
import {Layout} from "./components/Layout/index.jsx";
import {CartProvider} from "./context/Cart.jsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/single-product/:id",
                element: <SingleProduct/>
            },
            {
                path: "/checkout",
                element: <Checkout/>
            },
            {
                path: "/checkout-success",
                element: <CheckoutSuccess/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    },

])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
    </StrictMode>,
)
