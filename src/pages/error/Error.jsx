import React from 'react'

const Error = ({ message }) => {
    return (
        <main>
            <h1 className='text-2xl font-bold text-black text-center'>
                {message}
            </h1>
        </main>
    )
}

export default Error
