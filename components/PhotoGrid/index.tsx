import React from "react";

import './style.scss';

const Products = [
    { src: "/images/theater.jpg", alt: 'Movie', prodcut_title: 'Movie' },
    { src: "/images/cooking.jpg", alt: 'Learn To Cook', prodcut_title: 'Learn To Cook' },
    { src: "/images/teaching.jpg", alt: 'Learn', prodcut_title: 'Learn' },
    { src: "/images/drama.jpg", alt: 'Play', prodcut_title: 'Play' },
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