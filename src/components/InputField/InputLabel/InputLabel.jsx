import React from 'react'

const InputLabel = ({htmlFor, text}) => {
    return (
        <label className="block w-full ps-1 pb-2 text-left text-slate-500" htmlFor={htmlFor}>
            {text}
        </label>
    );
};

export default InputLabel
