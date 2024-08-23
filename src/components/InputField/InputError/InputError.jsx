import React from 'react'

const InputError = ({ condition, text }) => {
    return (
        <p className="text-left font-light sm:text-sm text-xs text-red-600 mt-2 mb-4">
            {condition && text}
        </p>
    );
};

export default InputError
