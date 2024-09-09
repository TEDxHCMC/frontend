import React from 'react'
import "./inputLabel.scss"

const InputLabel = ({htmlFor, text}) => {
    return (
        <label className="inputLabel block w-full ps-1 pb-3 text-left text-black md:font-semibold font-medium md:text-[20px] text-[16px]" htmlFor={htmlFor}>
            {text}
        </label>
    );
};

export default InputLabel
