import React from 'react'

const InputLabel = ({htmlFor, text}) => {
    return (
        <label className="block w-full ps-1 pb-3 text-left text-black font-semibold text-[20px]" htmlFor={htmlFor}>
            {text}
        </label>
    );
};

export default InputLabel
