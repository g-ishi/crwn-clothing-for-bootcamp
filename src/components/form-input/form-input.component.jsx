import React from 'react';

import './form-input.style.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
            {/* labelは引数が与えられた場合のみ表示するようにする */}
            {
                label ? (
                    // 入力値の有無よってlabelにつけるクラスが変わる
                    <label
                        className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                ) : null
            }
        </div>
    )
}

export default FormInput;
