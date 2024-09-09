import { Button, Result } from 'antd'
import React from 'react'

const NotFound = () => {
    return (
        <main className='min-h-screen flex flex-col justify-center items-center'>
            <Result
                status="404"
                title="404"
                subTitle="Trang bạn tìm kiếm không tồn tại"
                extra={<Button type="primary">Trở về Trang Chủ</Button>}
            />
        </main>
    )
}

export default NotFound