import React from "react";

import "./menu-item.component.scss";

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        < div className={`menu-item ${size}`}>
            {/* 背景画像だけホバーしたときに大きくしたいので、要素として独立させる必要がある */}
            <div className="background-image"
                style={
                    {
                        backgroundImage: `url(${imageUrl})`
                    }
                }
            ></div>
            < div className="content" >
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">SHOP NOW</span>
            </div >
        </div >
    )
}

export default MenuItem;
