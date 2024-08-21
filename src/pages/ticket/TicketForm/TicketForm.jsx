import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Divider, Row, Tabs } from "antd";
import InputField from "../../../components/InputField";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { handleSetCurrStep } from "../../../redux/slices/ticket.slice";
import { sendVerifyCodeAPI } from "../../../apis/ticket.api";
import "./ticketForm.scss";

const TicketForm = () => {
    const { ticketAmount } = useSelector((state) => state.ticket);
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
            .default(() => ""),
        email2: Yup.string()
            .email("Email không hợp lệ")
            .required("Email không được để trống!")
            .default(() => ""),
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
            .default(() => ""),
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_w0dkj4v", "template_87w6fe8", form.current, {
                publicKey: "hs6_StbW_m7PG9AiH",
            })
            .then(
                () => {
                    console.log("SUCCESSFULLY SENT EMAIL!");
                },
                (error) => {
                    console.log("FAILED TO SEND EMAIL!", error.text);
                }
            );
    };

    const handleSubmit = async () => {
        // console.log("Submit Actions!");
        //* Verify Code here
        //* Send email to user here
        //* Navigate to next page
        // navigate(`${PATH.TICKET}/confirm`);
        //* Update redux store here
        // .....
    };

    const handleSendVerifyCode = async () => {
        let formData = {
            email: formik.values.email,
        };

        // console.log("Email: ", formData)
        const result = await sendVerifyCodeAPI(formData);

        // console.log("Result: ", result)
    };

    const items = [
        {
            key: "1",
            label: "Nguời đăng kí",
            children: "",
        },
        {
            key: "2",
            label: "Người đi kèm (+)",
            children: "",
            disabled: false,
        },
    ];

    const handleOnChange = (key) => {
        console.log(`Key: `, key);
    };

    useEffect(() => {
        dispatch(handleSetCurrStep(2));
    });

    return (
        <main className={`w-11/12 mx-auto mt-8`}>
            <div className="title mb-4 w-3/4">
                <h1
                    className="xl:text-[30px] sm:text-xl text-lg text-nowrap font-semibold mb-2"
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
                            76 Lê Lai, Phường Bến Thành, Quận 1, Thành phố Hồ
                            Chí Minh
                        </span>
                    </p>
                </div>
            </section>

            <section className="register">
                <Row gutter={24}>
                    <Col span={16}>
                        <h3 className="font-bold text-2xl text-black mb-4">
                            THÔNG TIN ĐĂNG KÍ
                        </h3>
                        <div className="w-full bg-white px-10 py-5 rounded-2xl shadow-lg">
                            <Tabs
                                defaultActiveKey="1"
                                items={items}
                                size="large"
                                onChange={handleOnChange}
                                className="mb-4"
                            />
                            <form className="">
                                <div className={`flex flex-col gap-y-5`}>
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
                                            formik.touched.fullName &&
                                            formik.errors.fullName
                                                ? "error"
                                                : ""
                                        }
                                        error={{
                                            condition:
                                                formik.touched.fullName &&
                                                formik.errors.fullName,
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
                                            formik.touched.phone &&
                                            formik.errors.phone
                                                ? "error"
                                                : ""
                                        }
                                        error={{
                                            condition:
                                                formik.touched.phone &&
                                                formik.errors.phone,
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
                                            formik.touched.email &&
                                            formik.errors.email
                                                ? "error"
                                                : ""
                                        }
                                        error={{
                                            condition:
                                                formik.touched.email &&
                                                formik.errors.email,
                                            text: formik.errors.email,
                                        }}
                                    />
                                </div>

                                <div className="flex gap-2 w-full">
                                    <Button
                                        className="w-1/6 h-fit md:p-3 mb-5 bg-red-600 sm:text-lg text-base text-white border border-slate-500 rounded transition-all hover:scale-[102%]"
                                        type="button"
                                        onClick={handleSendVerifyCode}
                                    >
                                        <p className="text-white font-bold">
                                            Gửi mã xác nhận
                                        </p>
                                    </Button>
                                    <div className="w-5/6">
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
                                                formik.touched.code &&
                                                formik.errors.code
                                                    ? "error"
                                                    : ""
                                            }
                                            error={{
                                                condition:
                                                    formik.touched.code &&
                                                    formik.errors.code,
                                                text: formik.errors.code,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* <div className="w-full">
                                        {ticketAmount >= 2 && (
                                            <div className="w-full">
                                                <h3 className="font-semibold text-lg text-blue-700">
                                                    Khách 2
                                                </h3>
                                                <InputField
                                                    id="fullName2"
                                                    name="fullName2"
                                                    type="text"
                                                    label={"Họ và tên"}
                                                    placeholder="Nguyễn Văn A"
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    value={
                                                        formik.values.fullName2
                                                    }
                                                    status={
                                                        formik.touched
                                                            .fullName2 &&
                                                        formik.errors.fullName2
                                                            ? "error"
                                                            : ""
                                                    }
                                                    error={{
                                                        condition:
                                                            formik.touched
                                                                .fullName2 &&
                                                            formik.errors
                                                                .fullName2,
                                                        text: formik.errors
                                                            .fullName2,
                                                    }}
                                                />

                                                <InputField
                                                    id="email2"
                                                    name="email2"
                                                    type="email"
                                                    label={"Email"}
                                                    placeholder="abc@email.com"
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email2}
                                                    status={
                                                        formik.touched.email2 &&
                                                        formik.errors.email2
                                                            ? "error"
                                                            : ""
                                                    }
                                                    error={{
                                                        condition:
                                                            formik.touched
                                                                .email2 &&
                                                            formik.errors
                                                                .email2,
                                                        text: formik.errors
                                                            .email2,
                                                    }}
                                                />

                                                <InputField
                                                    id="phone2"
                                                    name="phone2"
                                                    type="text"
                                                    label={"Số điện thoại"}
                                                    placeholder="0123456789 hoặc (+84) 123456789"
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.phone2}
                                                    status={
                                                        formik.touched.phone2 &&
                                                        formik.errors.phone2
                                                            ? "error"
                                                            : ""
                                                    }
                                                    error={{
                                                        condition:
                                                            formik.touched
                                                                .phone2 &&
                                                            formik.errors
                                                                .phone2,
                                                        text: formik.errors
                                                            .phone2,
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div> */}
                            </form>
                        </div>
                    </Col>

                    <Col span={8}>
                        <h3 className="font-bold text-2xl text-black mb-4">
                            THÔNG TIN VÉ
                        </h3>
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
                            <Button
                                className="w-full h-fit md:p-3 mb-5 bg-red-600 sm:text-lg text-base text-white rounded-full transition-all hover:scale-[102%]"
                                type="button"
                                onClick={formik.handleSubmit}
                            >
                                <p className="text-white font-bold">
                                    Hoàn tất{" "}
                                </p>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </section>
        </main>
    );
};

export default TicketForm;
