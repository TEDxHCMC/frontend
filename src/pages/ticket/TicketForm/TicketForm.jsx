import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Collapse, Divider, Modal, Row, Tabs, Tag } from "antd";
import InputField from "../../../components/InputField";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { handleSetCurrStep } from "../../../redux/slices/ticket.slice";
import { sendVerifyCodeAPI } from "../../../apis/ticket.api";
import "./ticketForm.scss";

const TicketForm = () => {
    const { ticketAmount } = useSelector((state) => state.ticket);
    const [modalOpen, setModalOpen] = useState(false);
    const [primaryCompleted, setPrimaryCompleted] = useState(false);
    const [extraCompleted, setExtraCompleted] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const TicketSchema = Yup.object().shape({
        fullName: Yup.string().required("Họ tên không được để trống!"),
        email: Yup.string()
            .email("Email không hợp lệ")
            .required("Email không được để trống!"),
        phone: Yup.string()
            .required("Số điện thoại không được để trống!")
            .min(10, "Số điện thoại phải chứa ít nhất 10 số.")
            .max(
                15,
                "Số điện thoại không được vượt quá 15 số (bao gồm + và mã vùng)."
            )
            .matches(
                /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{4,6}$/,
                "Số điện thoại không hợp lệ!"
            ),
        fullName2: Yup.string()
            .required("Họ tên không được để trống!")
            .default(() => "_"),
        email2: Yup.string()
            .email("Email không hợp lệ")
            .required("Email không được để trống!")
            .default(() => "empty@gmail.com"),
        phone2: Yup.string()
            .required("Số điện thoại không được để trống!")
            .min(10, "Số điện thoại phải chứa ít nhất 10 số.")
            .max(
                15,
                "Số điện thoại không được vượt quá 15 số (bao gồm + và mã vùng)."
            )
            .matches(
                /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{4,6}$/,
                "Số điện thoại không hợp lệ!"
            )
            .default(() => "0000000000"),
        code: Yup.string().required("Mã xác nhận không được để trống!"),
    });

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            fullName2: "",
            email2: "",
            phone2: "",
            code: "",
        },
        validationSchema: TicketSchema,
        onSubmit: (values) => {
            console.log("values: ", values);

            formik.setSubmitting(false);
            handleSubmit();
        },
    });

    const handleSubmit = async () => {
        // console.log("Submit Actions!");
        console.log(formik.values);

        //* Verify Code here

        //* Send email to user here

        //* Navigate to next page
        navigate("/ticket/done");

        //* Update redux store here
        // .....
    };

    const handleSendVerifyCode = async () => {
        let formData = {
            email: formik.values.email,
        };

        // console.log("Email: ", formData)
        const result = await sendVerifyCodeAPI(formData);

        console.log("Result: ", result);
    };

    useEffect(() => {
        dispatch(handleSetCurrStep(2));
    }, []);

    useEffect(() => {
        if (
            formik.errors.fullName ||
            formik.errors.email ||
            formik.errors.phone
        ) {
            setPrimaryCompleted(false);
        } else {
            setPrimaryCompleted(true);
        }
    }, [formik.values.fullName, formik.values.email, formik.values.phone]);

    useEffect(() => {
        if (
            formik.errors.fullName2 ||
            formik.errors.email2 ||
            formik.errors.phone2
        ) {
            setExtraCompleted(false);
        } else {
            setExtraCompleted(true);
        }
    }, [formik.values.fullName2, formik.values.email2, formik.values.phone2]);

    const renderPrimaryForm = (
        <section className="">
            <div className={`flex flex-col md:gap-y-5 gap-y-2`}>
                <InputField
                    id="fullName"
                    name="fullName"
                    type="text"
                    label={"Họ và tên"}
                    placeholder="Nguyễn Văn A"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    status={
                        formik.touched.fullName && formik.errors.fullName
                            ? "error"
                            : ""
                    }
                    error={{
                        condition:
                            formik.touched.fullName && formik.errors.fullName,
                        text: formik.errors.fullName,
                    }}
                />

                <InputField
                    id="phone"
                    name="phone"
                    type="text"
                    label={"Số điện thoại"}
                    placeholder="0123456789 hoặc (+84)123456789"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    status={
                        formik.touched.phone && formik.errors.phone
                            ? "error"
                            : ""
                    }
                    error={{
                        condition: formik.touched.phone && formik.errors.phone,
                        text: formik.errors.phone,
                    }}
                />

                <InputField
                    id="email"
                    name="email"
                    type="email"
                    label={"Email"}
                    placeholder="abc@email.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    status={
                        formik.touched.email && formik.errors.email
                            ? "error"
                            : ""
                    }
                    error={{
                        condition: formik.touched.email && formik.errors.email,
                        text: formik.errors.email,
                    }}
                />
            </div>

            <div className="flex gap-2 w-full">
                <Button
                    className={`w-fit h-fit sm:p-3 p-2 bg-red-600 text-white border border-slate-500 rounded transition-all hover:scale-[102%] ${
                        !formik.values.email || formik.errors.email
                            ? "!opacity-50"
                            : ""
                    }`}
                    type="button"
                    onClick={handleSendVerifyCode}
                    disabled={!formik.values.email || formik.errors.email}
                >
                    <p className="text-white md:text-lg text-sm sm:font-bold font-medium">
                        Gửi mã xác nhận
                    </p>
                </Button>
                <div className="w-full">
                    <InputField
                        id="code"
                        name="code"
                        type="text"
                        label={""}
                        placeholder="Nhập mã xác nhận"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.code}
                        status={
                            formik.touched.code && formik.errors.code
                                ? "error"
                                : ""
                        }
                        error={{
                            condition:
                                formik.touched.code && formik.errors.code,
                            text: formik.errors.code,
                        }}
                    />
                </div>
            </div>
        </section>
    );

    const renderExtraForm = (
        <section className="flex flex-col gap-y-5">
            <InputField
                id="fullName2"
                name="fullName2"
                type="text"
                label={"Họ và tên"}
                placeholder="Nguyễn Văn A"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName2}
                status={
                    formik.touched.fullName2 && formik.errors.fullName2
                        ? "error"
                        : ""
                }
                error={{
                    condition:
                        formik.touched.fullName2 && formik.errors.fullName2,
                    text: formik.errors.fullName2,
                }}
            />

            <InputField
                id="phone"
                name="phone"
                type="text"
                label={"Số điện thoại"}
                placeholder="0123456789 hoặc (+84)123456789"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone2}
                status={
                    formik.touched.phone2 && formik.errors.phone2 ? "error" : ""
                }
                error={{
                    condition: formik.touched.phone2 && formik.errors.phone2,
                    text: formik.errors.phone2,
                }}
            />

            <InputField
                id="email2"
                name="email2"
                type="email"
                label={"Email"}
                placeholder="abc@email.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email2}
                status={
                    formik.touched.email2 && formik.errors.email2 ? "error" : ""
                }
                error={{
                    condition: formik.touched.email2 && formik.errors.email2,
                    text: formik.errors.email2,
                }}
            />
        </section>
    );

    const renderSubmitSect = (
        <section className="">
            <h3 className="font-bold text-2xl text-black mb-4">THÔNG TIN VÉ</h3>
            <div className="bg-white w-full py-4 px-4 h-30 rounded-xl shadow-lg">
                <div className="flex justify-between items-center font-semibold text-xl mb-4">
                    <p>Tên</p>
                    <p>Số lượng</p>
                </div>
                <div className="flex justify-between items-center font-light text-[18px] text-slate-700 mb-5">
                    <p>Vé tham gia</p>
                    <p>{ticketAmount}</p>
                </div>
                <div className="text-right font-light text-[18px] text-slate-700">
                    Miễn phí
                </div>
                <Divider
                    dashed
                    style={{
                        borderColor: "#000",
                        margin: "12px 0px",
                    }}
                ></Divider>
                <div className="flex justify-between items-center font-bold text-lg mb-16">
                    <p className="text-black">Tổng cộng:</p>
                    <p className="text-red-700">Miễn Phí</p>
                </div>
                
                <div className="flex justify-start items-start mb-3">
                    <Checkbox></Checkbox>
                    <p className="md:text-base text-sm font-normal ps-2 inline-block">
                        Bằng cách hoàn thành đăng ký, bạn đồng ý tuân theo và chấp nhận tất cả các{" "}
                        <span
                            onClick={() => setModalOpen(true)}
                            className=" text-blue-600 hover:underline hover:text-blue-800"
                        >
                            Điều khoản và Điều kiện
                        </span>{" "}
                        do BTC sự kiện đưa ra.
                    </p>
                </div>
                <Button
                    className={`w-full h-fit md:p-3 mb-5 bg-red-600 sm:text-lg text-base text-white rounded-full transition-all hover:scale-[102%] ${
                        !formik.isValid ? "!opacity-50" : ""
                    }`}
                    type="button"
                    onClick={formik.handleSubmit}
                    disabled={!formik.isValid}
                >
                    <p className="text-white font-bold">Hoàn tất </p>
                </Button>
            </div>
        </section>
    );

    const renderModal = (
        <Modal
            width={"80%"}
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
        >
            <div className="w-full py-5 px-2">
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
                                1.1 Người tham dự phải đáp ứng các yêu cầu về độ
                                tuổi tối thiểu (16 tuổi) vào ngày diễn ra sự
                                kiện. Ban Tổ Chức (BTC) có quyền xác minh độ
                                tuổi của người tham dự khi check-in và từ chối
                                người tham dự nếu không đáp ứng yêu cầu.
                            </p>
                            <p className="text-base ps-3">
                                1.2 Người tham dự phải mang theo giấy tờ tùy
                                thân (CCCD/Hộ chiếu/Giấy phép lái xe) khớp với
                                tên đã được đăng ký. BTC có quyền từ chối người
                                tham dự trong trường hợp thông tin cung cấp tại
                                cổng check-in không khớp với thông tin đã được
                                đăng ký.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="text-base">2. Đăng ký vé tham dự</span>
                        <div className="space-y-0.5">
                            <p className="text-base ps-3">
                                2.1 Người tham dự cần bảo đảm nhập đúng thông
                                tin đặt vé. BTC sẽ xác thực thông tin khi
                                check-in bao gồm: mã vé được cung cấp trong
                                email xác nhận đặt vé và giấy tờ tùy thân của
                                người tham dự.
                            </p>
                            <p className="text-base ps-3">
                                2.2 Việc đăng ký chỉ được coi là hoàn tất khi
                                người tham dự nhận được email xác nhận từ BTC.
                            </p>
                            <p className="text-base ps-3">
                                2.3 Người tham dự chỉ được tham gia vào phiên
                                chia sẻ (session) đã đăng ký theo thông tin trên
                                vé. Không được thay đổi hoặc tham dự session
                                chưa được đăng ký.
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
                                check-in của session đã đăng ký. BTC sẽ không
                                giải quyết các trường hợp đến trễ hơn so với giờ
                                check-in đã được thông báo.
                            </p>
                            <p className="text-base ps-3">
                                3.2 Chương trình không sắp xếp số ghế. Người
                                tham dự sẽ được sắp xếp chỗ ngồi theo sự hướng
                                dẫn của BTC.
                            </p>
                        </div>
                    </li>
                    <li className="text-base">
                        4. Người tham dự cần tự bảo quản tư trang cá nhân. BTC
                        sẽ không chịu trách nhiệm về bất kỳ mất mát và/hoặc
                        thiệt hại nào phát sinh trong sự kiện.
                    </li>
                    <li className="text-base">
                        5. BTC có quyền sử dụng bất kỳ hình ảnh và video nào
                        được chụp/quay trong sự kiện cho các mục đích hợp pháp,
                        bao gồm cả truyền thông.
                    </li>
                    <li className="text-base">
                        6. BTC có quyền từ chối sự tham gia của bất kỳ người
                        tham dự nào không tuân theo điều khoản, điều kiện và các
                        nội quy của chương trình.
                    </li>
                    <li className="text-base">
                        7. Vui lòng tuân thủ theo hướng dẫn của BTC trong suốt
                        quá trình tham gia chương trình.
                    </li>
                </ol>
            </div>
        </Modal>
    );

    const tabItems = [
        {
            key: "1",
            label: "Nguời đăng kí",
            children: renderPrimaryForm,
        },
        {
            key: "2",
            label: "Người đi kèm (+)",
            children: renderExtraForm,
            disabled: ticketAmount == 1,
        },
    ];

    const generateExtra = (completedStatus) => (
        <>
            {completedStatus ? (
                <Tag color="green">Hoàn thành</Tag>
            ) : (
                <Tag color="red">Chưa hoàn thành</Tag>
            )}
        </>
    );

    const collapsedItems = [
        {
            key: "1",
            label: "Người đăng kí",
            children: renderPrimaryForm,
            extra: generateExtra(primaryCompleted),
        },
        {
            key: "2",
            label: "Người đi kèm",
            children: renderExtraForm,
            extra: generateExtra(extraCompleted),
        },
    ];

    return (
        <>
            <main className={`w-11/12 mx-auto mt-8 lg:block hidden`}>
                <div className="title mb-4 w-full">
                    <h1
                        className="xl:text-[30px] sm:text-2xl text-lg font-semibold mb-2 text-nowrap"
                        style={{ letterSpacing: -0.5 }}
                    >
                        {`[Vé tham dự] Sự kiện TEDxHoChiMinhCity 2024 - Tỏ tường: Mở lòng với thực tại`}
                    </h1>
                    <div className="bg-black h-[1px] w-full"></div>
                </div>

                <section className="info mb-10 ps-2">
                    <div className="flex items-center gap-2 mb-2">
                        <i className="fa fa-calendar text-lg"></i>
                        <p className="font-semibold text-xl">
                            Sáng: 9:00 - 12:00, ngày 21 tháng 9, 2024
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i class="fa fa-map-marker-alt text-lg"></i>
                        <p className="font-semibold text-[20px] relative translate-y-3">
                            Khách sạn New World Sài Gòn <br />
                            <span className="font-medium text-sm">
                                76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố
                                Hồ Chí Minh
                            </span>
                        </p>
                    </div>
                </section>

                <form className="register">
                    <Row className="" gutter={24}>
                        <Col span={16}>
                            <h3 className="font-bold text-2xl text-black mb-4">
                                THÔNG TIN ĐĂNG KÍ
                            </h3>
                            <div className="w-full bg-white px-10 py-5 rounded-2xl shadow-lg">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={tabItems}
                                    size="large"
                                    className="mb-4"
                                />
                            </div>
                        </Col>

                        <Col span={8}>{renderSubmitSect}</Col>
                    </Row>
                </form>
            </main>

            <main
                className={`register-mobile w-11/12 mx-auto mt-8 block lg:hidden`}
            >
                <Collapse
                    accordion
                    defaultActiveKey={["1"]}
                    expandIconPosition={"end"}
                    items={collapsedItems}
                    className="mb-5"
                />
                {renderSubmitSect}
                {renderModal}
            </main>
        </>
    );
};

export default TicketForm;
