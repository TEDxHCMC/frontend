import { Radio, Space } from 'antd'
import { useState } from 'react'

const RadioList = ({onChange, name, option, content}) => {

    return (
        <Radio.Group name={name} className="flex flex-wrap justify-start align-middle gap-x-2 gap-y-5" onChange={onChange} value={option}>
            <Space direction='vertical' className='sm:gap-y-3'>
                {content.map((radio) => (
                    <Radio key={content.indexOf(radio) + 1} className={`lg:w-96 w-80 justify-center sm:px-5 sm:py-1 px-4 py-1 m-0 border border-solid border-black transition-all hover:scale-105 rounded-full ${radio.value === option ? "bg-black text-white" : "bg-white text-black"}`} value={radio.value}>
                        <p dangerouslySetInnerHTML={{ __html: radio.content }} className='font-light md:text-lg text-sm text-center'></p>
                    </Radio>
                ))}
            </Space>
        </Radio.Group>
    )
}

export default RadioList
