import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    
    function handleClick() {
        console.info("Handle Click");
        setLoad(true);
    }

    useEffect(() => {
        console.info("Call Use Effect with []");
    }, []);

    useEffect(() => {
        console.info("Call Use Effect")

        async function fetchProducts() {
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        }

        if (load) {
            fetchProducts();
        }

        return () => {
            console.info("Product List component unmounted");
        }
    }, [load])


    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map(product => (
                <Product product={product} key={product.id} />
            ))}
        </>
    )
}