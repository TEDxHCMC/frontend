import { Button, Result } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const TicketResult = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleSetCurrStep(3));
    }, []);

    return (
        <>
            <Result
                status="success"
                title="Yay, bạn đã đăng ký vé thành công!"
                subTitle="Chờ xíu nhé, thông tin xác nhận tham dự sẽ được gửi đến email mà bạn đã đăng ký."
                extra={[
                    <Button type="primary" key="console">
                        Trang Chủ
                    </Button>,
                    <Button key="buy">Trang Đăng Ký</Button>,
                ]}
            />
        </>
    );
};

export default TicketResult;
