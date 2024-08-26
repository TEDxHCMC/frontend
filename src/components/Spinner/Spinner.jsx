import { Flex, Spin } from 'antd'
import React from 'react'

const Spinner = () => {
    return (
        <Flex align="center" gap="middle">
            <Spin size="large" fullscreen/>
        </Flex>
    )
}

export default Spinner