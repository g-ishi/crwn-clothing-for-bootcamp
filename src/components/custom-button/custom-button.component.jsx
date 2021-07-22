import React from 'react';

import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {/* childrenは呼び出し側でタグの要素として渡されたものを取得することができる */}
        {children}
    </button>
)

export default CustomButton;
