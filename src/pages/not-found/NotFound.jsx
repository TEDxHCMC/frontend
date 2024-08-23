import { Button, Result } from 'antd'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Trang bạn tìm kiếm không tồn tại"
                extra={<Button type="primary">Back Home</Button>}
            />
        </>
    )
}

export default 404