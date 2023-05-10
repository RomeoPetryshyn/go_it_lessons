import React from "react";
import { useParams, useLocation } from 'react-router-dom';

function ProductDetails () {
    const { productId, name } = useParams();
    console.log({ productId });

    const location = useLocation();
    console.log({location});

    return (
        <div>Product Details page. Id: {productId}, Name: {name}</div>
    )
}

export default ProductDetails;
