import React from "react";
import DetailsFooter from "../detailsFooter/DetailsFooter";
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

function ProductDetails () {
    const { productId, name } = useParams();
    
    // const [searchParams, setSearchParams] = useSearchParams(); 
    // const type = searchParams.get("type");

    // const handleSearchParamsSet = (event) => {
    //     console.log({ event });
    //     setSearchParams({ type: event.target.value });
    // }

    // console.log({ productId });

    const location = useLocation();
    console.log({ location });

    const { state: { from: { pathname } } } = location;

    console.log({ pathname });

    return (
        <>
            <div>Product Details page. Id: {productId}, Name: {name}</div>
            <DetailsFooter />
            {/* <input
                type="text"
                value={type}
                onChange={e => handleSearchParamsSet(e)}
            /> */}
        </>
    )
}

export default ProductDetails;
