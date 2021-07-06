import React from "react";

import "./homepage.style.scss"

const HomePage = () => {
    return (
        <div className="homepage">            
            {/* メニューを表示する枠 */}
            <div className="directory-menu">
                {/* 1つのメニューの箱 */}
                <div className="menu-item">
                    {/* メニュー名とかが書いてある内側の小さな箱 */}
                    <div className="content">
                        <div className="title">HATS</div>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* 1つのメニューの箱 */}
                <div className="menu-item">
                    {/* メニュー名とかが書いてある内側の小さな箱 */}
                    <div className="content">
                        <div className="title">JACKETS</div>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* 1つのメニューの箱 */}
                <div className="menu-item">
                    {/* メニュー名とかが書いてある内側の小さな箱 */}
                    <div className="content">
                        <div className="title">SHOES</div>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* 1つのメニューの箱 */}
                <div className="menu-item">
                    {/* メニュー名とかが書いてある内側の小さな箱 */}
                    <div className="content">
                        <div className="title">WOMENS</div>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* 1つのメニューの箱 */}
                <div className="menu-item">
                    {/* メニュー名とかが書いてある内側の小さな箱 */}
                    <div className="content">
                        <div className="title">MENS</div>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;
