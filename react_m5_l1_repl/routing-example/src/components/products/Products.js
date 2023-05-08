import React from "react";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Products () {
    const productsData = [
        {
            id: uuidv4(),
            name: 'Potato'
        },
        {
            id: uuidv4(),
            name: 'Orange'
        },
        {
            id: uuidv4(),
            name: 'Tomato'
        },
        {
            id: uuidv4(),
            name: 'Watermelon'
        }
    ];
    const productsMarkup = productsData.map(({ id, name }) => {
        return (
            <Link key={`${id}`} to={`/products/product/${id}/${name}`}> {name} </Link>
        );
    });

    return (
        <>
            <div>Products page</div>
            <div>{productsMarkup}</div>
        </>
    )
}

export default Products;