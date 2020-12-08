import React from 'react';

const Logo = () => {
    let url = "/logo/logo.png"
    return(
        <div className="logo">
            <img src={url} alt="logo" />
        </div>
    )
};

export default Logo;