import React from "react";

import './style.scss';

const Products = [
    { src: "/images/theater.jpg", alt: 'product image', prodcut_title: 'Product title' },
    { src: "/images/cooking.jpg", alt: 'product image', prodcut_title: 'Product title' },
    { src: "/images/teaching.jpg", alt: 'product image', prodcut_title: 'Product title' },
    { src: "/images/drama.jpg", alt: 'product image', prodcut_title: 'Product title' },
];

const PhotoGrid:React.FC = (props) =>{
    return(
        <div className="ecmRight">
            {Products.map((product, index) => {
                return (
                    <div className="productSingle" key={index}>
                        <img src={product.src} alt={product.alt}/>
                        <div className="productTitle">{product.prodcut_title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default PhotoGrid;