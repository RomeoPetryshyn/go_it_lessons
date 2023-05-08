import React from "react";
import { useParams } from 'react-router-dom';

function ProductDetails () {
    const { productId, name } = useParams();
    console.log({ productId });

    return (
        <div>Product Details page. Id: {productId}, Name: {name}</div>
    )
}

export default ProductDetails;