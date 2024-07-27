import { Radio } from 'antd'
import React from 'react'

const RadioBtn = ({value, text}) => {
    return (
        <Radio className="lg:w-96 w-80 justify-center sm:px-5 sm:py-1 px-4 py-1 m-0 border border-solid border-black rounded-full hover:border-blue-400 hover:text-blue-600" value={value}>
            <p dangerouslySetInnerHTML={{ __html: text }} className='font-light md:text-lg text-sm text-center'></p>
        </Radio>
    )
}

export default RadioBtn
