import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.component.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
    return (
        < div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

// withRouterにより、MenuItemコンポーネントでhistory, location, matchが使用可能になる
export default withRouter(MenuItem);
