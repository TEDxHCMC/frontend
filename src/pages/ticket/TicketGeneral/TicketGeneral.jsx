import { Row, Col, Divider, Checkbox, Radio, Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSetCurrStep, handleSetTicketAmount } from "../../../redux/slices/ticket.slice";

// const dates = [
//     {
//         day: "T5",
//         fullDate: "19/09/2024",
//     },
//     {
//         day: "T6",
//         fullDate: "20/09/2024",
//     },
//     {
//         day: "T7",
//         fullDate: "21/09/2024",
//     },
//     {
//         day: "CN",
//         fullDate: "22/09/2024",
//     },
//     {
//         day: "T2",
//         fullDate: "23/09/2024",
//     },
// ];

const regulations = () => {
    return (
        <div>
            <h1>ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</h1>
            <p>1. Yêu cầu về độ tuổi và giấy tờ tùy thân</p>
            Người tham dự phải đáp ứng các yêu cầu về độ tuổi tối thiểu (16
            tuổi) vào ngày diễn ra sự kiện. Ban Tổ Chức (BTC) có quyền xác minh
            độ tuổi của người tham dự khi check-in và từ chối người tham dự nếu
            không đáp ứng yêu cầu. Người tham dự phải mang theo giấy tờ tùy thân
            (CCCD/Hộ chiếu/Giấy phép lái xe) khớp với tên đã được đăng ký. BTC
            có quyền từ chối người tham dự trong trường hợp thông tin cung cấp
            tại cổng check-in không khớp với thông tin đã được đăng ký. Đăng ký
            vé tham dự Người tham dự cần bảo đảm nhập đúng thông tin đặt vé. BTC
            sẽ xác thực thông tin khi check-in bao gồm: mã vé được cung cấp
            trong email xác nhận đặt vé và giấy tờ tùy thân của người tham dự.
            Việc đăng ký chỉ được coi là hoàn tất khi người tham dự nhận được
            email xác nhận từ BTC. Người tham dự chỉ được tham gia vào phiên
            chia sẻ (session) đã đăng ký theo thông tin trên vé. Không được thay
            đổi hoặc tham dự session chưa được đăng ký. Tất cả các vé tham dự sự
            kiện không được chuyển nhượng dưới bất kỳ hình thức nào. Check-in
            Người tham dự cần đến đúng khung giờ check-in của session đã đăng
            ký. BTC sẽ không giải quyết các trường hợp đến trễ hơn so với giờ
            check-in đã được thông báo. Chương trình không sắp xếp số ghế. Người
            tham dự sẽ được sắp xếp chỗ ngồi theo sự hướng dẫn của BTC. Người
            tham dự cần tự bảo quản tư trang cá nhân. BTC sẽ không chịu trách
            nhiệm về bất kỳ mất mát và/hoặc thiệt hại nào phát sinh trong sự
            kiện. BTC có quyền sử dụng bất kỳ hình ảnh và video nào được
            chụp/quay trong sự kiện cho các mục đích hợp pháp, bao gồm cả truyền
            thông. BTC có quyền từ chối sự tham gia của bất kỳ người tham dự nào
            không tuân theo điều khoản, điều kiện và các nội quy của chương
            trình. Vui lòng tuân thủ theo hướng dẫn của BTC trong suốt quá trình
            tham gia chương trình. Bằng cách hoàn thành đăng ký, người đăng ký
            đồng ý tuân theo và chấp nhận tất cả các Điều khoản và Điều kiện của
            chương trình do BTC sự kiện đưa ra.
        </div>
    );
};

const sessions = [
    {
        name: "Sáng",
        time: "09:00 AM - 12:00 PM",
        value: "1",
    },
    {
        name: "Chiều",
        time: "13:00 PM - 16:00 PM",
        value: "2",
    },
];

const TicketGeneral = () => {
    const [amount, setAmount] = useState(1);
    const [selectedDate, setSelectedDate] = useState("");
    const [sessionsChecked, setSessionsChecked] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDecrease = (e) => {
        e.preventDefault();
        console.log("Decreasing amount");
        setAmount(amount - 1);
        console.log("New amount:", amount - 1);
    };
    
    const handleIncrease = (e) => {
        e.preventDefault();
        console.log("Increasing amount");
        setAmount(amount + 1);
        console.log("New amount:", amount + 1);
    };
    
    const handleChangeSession = (checkedValues) => {
        console.log("Checked session values:", checkedValues);
        setSessionsChecked(checkedValues);
    };
    
    const handleChangeDate = (e) => {
        console.log("Selected date:", e.target.value);
        setSelectedDate(e.target.value);
    };
    
    const handleSubmit = (e) => {
        console.log("Submitting form with amount:", amount);
        dispatch(handleSetTicketAmount(amount));
        console.log("Navigating to ticket/form");
        navigate("/ticket/form");
    };
    
    useEffect(() => {
        console.log("Setting current step to 1");
        dispatch(handleSetCurrStep(1));
    }, []); // Ensure this effect only runs once on component mount
    

    return (
        <Row>
            <Col className="items-start" span="18">
                <form className="min-h-full">
                    {/* <div className="mb-8">
                        <h2 className="font-semibold text-blue-800 text-2xl mb-3">
                            Ngày tham quan
                        </h2>

                        <Radio.Group onChange={handleChangeDate}>
                            <div className="date flex flex-wrap gap-3">
                                {dates.map((date, index) => (
                                    <Radio
                                        key={index}
                                        value={date.fullDate}
                                        className={`px-5 py-2 border-2 border-solid border-slate-400 rounded-lg transition-all hover:border-blue-600 ${
                                            selectedDate === date.fullDate
                                                && "bg-blue-400 border-transparent hover:border-transparent"
                                        }`}
                                    >
                                        <p className="text-xl text-slate-700 font-light">{`${date.day}, ${date.fullDate}`}</p>
                                    </Radio>
                                ))}
                            </div>
                        </Radio.Group>

                        <div className="date sm:hidden flex flex-wrap gap-5">
                            {dates.map((date, index) => (
                                <div
                                    key={index}
                                    className="px-3 py-2 border border-solid border-slate-800 rounded-lg"
                                >
                                    <div className="w-full h-full flex flex-col justify-between items-center gap-1">
                                        <span className="text-sm text-slate-500">
                                            {date.day}
                                        </span>
                                        <p className="text-xl text-slate-700 font-light">
                                            {date.fullDate.substring(0, 5)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className="mb-8">
                        <h2 className="font-semibold text-blue-800 text-2xl my-3">
                            Chọn Session
                        </h2>

                        <Checkbox.Group
                            className=""
                            onChange={handleChangeSession}
                        >
                            <div className="session flex gap-3">
                                {sessions.map((session, index) => (
                                    <Checkbox
                                        key={index}
                                        value={session.value}
                                        className={`px-5 py-2 border-2 border-solid border-slate-400 rounded-lg transition-all hover:border-blue-600 ${
                                            sessionsChecked.includes(
                                                session.value
                                            ) &&
                                            "bg-blue-400 hover:border-transparent"
                                        }`}
                                    >
                                        <p className="text-xl text-slate-700 font-light">{`${session.name} (${session.time})`}</p>
                                    </Checkbox>
                                ))}
                            </div>
                        </Checkbox.Group>
                    </div>

                    <h2 className="font-semibold text-blue-800 text-2xl my-3">
                        Thông tin vé
                    </h2>

                    <div className="w-11/12 border border-solid rounded border-slate-600 p-4">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h3 className="font-medium text-lg text-blue-900 mb-1">
                                    Vé tham quan
                                </h3>
                                <div className="text-base">
                                    <p>
                                        <span className="font-medium">Sự kiện: </span>TEDxHoChiMinhCity
                                        2024 - TỎ TƯỜNG
                                    </p>
                                    <p>
                                        <span className="font-medium">Thời gian: </span>Thứ 7, 21 Tháng
                                        9, 2024
                                    </p>
                                    <p>
                                        <span className="font-medium">Địa điểm: </span>New World Hotel,
                                        76 Lê Lai, Bến Thành, Quận 1, TP.HCM
                                    </p>
                                </div>
                            </div>
                            <p className="text-red-600 text-lg">Miễn phí</p>
                        </div>
                        <Divider />
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-lg text-blue-900 mb-3">
                                Số Lượng
                            </h3>
                            <div className="flex items-center p-2 gap-5 border border-solid border-slate-300 rounded-full">
                                <button
                                    disabled={amount == 1 ? true : false}
                                    className={`w-10 h-10 leading-10 rounded-full bg-blue-950 text-white ${
                                        amount == 1 && "opacity-40"
                                    }`}
                                    onClick={handleDecrease}
                                >
                                    -
                                </button>
                                <span className="font-bold text-xl">
                                    {amount}
                                </span>
                                <button
                                    disabled={amount == 2 ? true : false}
                                    className={`w-10 h-10 leading-10 rounded-full bg-blue-950 text-white ${
                                        amount == 2 && "opacity-40"
                                    }`}
                                    onClick={handleIncrease}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Col>
            <Col span="6">
                <div className="p-5 min-h-full rounded border border-solid border-slate-600">
                    <h2 className="text-xl font-semibold mb-5">Đơn hàng</h2>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">
                            {`${amount} x Vé Tham Quan`}
                        </p>
                        <p className="text-slate-600">Miễn phí</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center">
                        <p className="font-normal text-slate-600">
                            Tổng giá vé
                        </p>
                        <p className="text-slate-600">Miễn phí</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between align-top items-center mb-3">
                        <div className="flex flex-col justify-start">
                            <p className="font-base text-lg text-slate-600 mb-1">
                                Tổng cộng
                            </p>
                            <p lassName="text-slate-600 text-xs">
                                Đã bao gồm thuế VAT
                            </p>
                        </div>
                        <p className="text-slate-800 text-xl font-bold">
                            Miễn phí
                        </p>
                    </div>
                    <div className="flex justify-start items-start mb-3">
                        <Checkbox></Checkbox>
                        <p className="text-sm font-normal ps-2 inline-block">
                            Bằng cách hoàn thành đăng ký, người đăng ký đồng ý
                            tuân theo và chấp nhận tất cả các {" "}
                            <span
                                onClick={() => setModalOpen(true)}
                                className=" text-blue-600 hover:underline hover:text-blue-800"
                            >
                                Điều khoản và Điều kiện
                            </span>{" "}
                            do BTC sự kiện đưa ra.
                        </p>
                    </div>
                    <button
                        className="w-full bg-red-500 text-white h-10"
                        onClick={handleSubmit}
                    >
                        Đăng Ký
                    </button>
                </div>
            </Col>
            <Modal
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <div>
                    <h1 className="text-2xl text-blue-600 font-bold mb-3">
                        ĐIỀU KHOẢN VÀ ĐIỀU KIỆN
                    </h1>
                    <ol>
                        <li>
                            <span className="text-base">
                                1. Yêu cầu về độ tuổi và giấy tờ tùy thân
                            </span>
                            <div className="space-y-0.5">
                                <p className="text-base ps-3">
                                    1.1 Người tham dự phải đáp ứng các yêu cầu
                                    về độ tuổi tối thiểu (16 tuổi) vào ngày diễn
                                    ra sự kiện. Ban Tổ Chức (BTC) có quyền xác
                                    minh độ tuổi của người tham dự khi check-in
                                    và từ chối người tham dự nếu không đáp ứng
                                    yêu cầu.
                                </p>
                                <p className="text-base ps-3">
                                    1.2 Người tham dự phải mang theo giấy tờ tùy
                                    thân (CCCD/Hộ chiếu/Giấy phép lái xe) khớp
                                    với tên đã được đăng ký. BTC có quyền từ
                                    chối người tham dự trong trường hợp thông
                                    tin cung cấp tại cổng check-in không khớp
                                    với thông tin đã được đăng ký.
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="text-base">
                                2. Đăng ký vé tham dự
                            </span>
                            <div className="space-y-0.5">
                                <p className="text-base ps-3">
                                    2.1 Người tham dự cần bảo đảm nhập đúng
                                    thông tin đặt vé. BTC sẽ xác thực thông tin
                                    khi check-in bao gồm: mã vé được cung cấp
                                    trong email xác nhận đặt vé và giấy tờ tùy
                                    thân của người tham dự.
                                </p>
                                <p className="text-base ps-3">
                                    2.2 Việc đăng ký chỉ được coi là hoàn tất
                                    khi người tham dự nhận được email xác nhận
                                    từ BTC.
                                </p>
                                <p className="text-base ps-3">
                                    2.3 Người tham dự chỉ được tham gia vào
                                    phiên chia sẻ (session) đã đăng ký theo
                                    thông tin trên vé. Không được thay đổi hoặc
                                    tham dự session chưa được đăng ký.
                                </p>
                                <p className="text-base ps-3">
                                    2.4 Tất cả các vé tham dự sự kiện không được
                                    chuyển nhượng dưới bất kỳ hình thức nào.{" "}
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="text-base">3. Check-in</span>
                            <div className="space-y-0.5">
                                <p className="text-base ps-3">
                                    3.1 Người tham dự cần đến đúng khung giờ
                                    check-in của session đã đăng ký. BTC sẽ
                                    không giải quyết các trường hợp đến trễ hơn
                                    so với giờ check-in đã được thông báo.
                                </p>
                                <p className="text-base ps-3">
                                    3.2 Chương trình không sắp xếp số ghế. Người
                                    tham dự sẽ được sắp xếp chỗ ngồi theo sự
                                    hướng dẫn của BTC.
                                </p>
                            </div>
                        </li>
                        <li className="text-base">
                            4. Người tham dự cần tự bảo quản tư trang cá nhân.
                            BTC sẽ không chịu trách nhiệm về bất kỳ mất mát
                            và/hoặc thiệt hại nào phát sinh trong sự kiện.
                        </li>
                        <li className="text-base">
                            5. BTC có quyền sử dụng bất kỳ hình ảnh và video nào
                            được chụp/quay trong sự kiện cho các mục đích hợp
                            pháp, bao gồm cả truyền thông.
                        </li>
                        <li className="text-base">
                            6. BTC có quyền từ chối sự tham gia của bất kỳ người
                            tham dự nào không tuân theo điều khoản, điều kiện và
                            các nội quy của chương trình.
                        </li>
                        <li className="text-base">
                            7. Vui lòng tuân thủ theo hướng dẫn của BTC trong
                            suốt quá trình tham gia chương trình.
                        </li>
                    </ol>
                </div>
            </Modal>
        </Row>
    );
};

export default TicketGeneral;
