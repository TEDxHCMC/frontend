import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../../paths";
import { Button, Divider } from "antd";
import InputField from "../../../components/InputField";
import googleIcon from "../../../assets/img/icon-google.svg";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { handleSetCurrStep } from "../../../redux/slices/ticket.slice";

const TicketForm = ({}) => {
    const [amount, setAmount] = useState(2);
    const { currStep } = useSelector((state) => state.ticket)
    const navigate = useNavigate();
    const dispatch = useDispatch()

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
        fullName2: Yup.string().required("Họ tên không được để trống!"),
        email2: Yup.string()
            .email("Email không hợp lệ")
            .required("Email không được để trống!"),
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
            ),
    });

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            fullName2: "",
            email2: "",
            phone2: "",
        },
        validationSchema: TicketSchema,
        onSubmit: (values) => {
            console.log("values: ", values);

            formik.setSubmitting(false);
            handleSubmit();
        },
    });

    const handleSubmit = () => {
        // console.log("Submit Actions!");
        //* Update redux store here
        // .....
        //* Navigate to next page
        // navigate(`${PATH.TICKET}/confirm`);
    };

    

    useEffect(() => {
        dispatch(handleSetCurrStep(2))
    })

    return (
        <div className="flex justify-center items-center text-center h-full">
            <div className={`${amount == 1 ? "mx-auto" : "w-full"}`}>
                <div className="mb-12">
                    <h1
                        className="xl:text-5xl sm:text-4xl text-3xl text-nowrap mb-3"
                        style={{ letterSpacing: -0.5 }}
                    >
                        {`Thông tin vé (Vé tham gia event) `}
                    </h1>

                    <p className="xl:text-xl sm:text-lg text-sm space-x-2 font-light">
                        {`Vui lòng nhập đầy đủ thông tin đặt vé`}
                    </p>
                </div>

                <Divider></Divider>

                <form className="flex flex-col justify-center items-center gap-2">
                    <div className="w-full">
                        <h3 className="font-semibold text-lg text-blue-700">
                            Người đại diện đăng ký vé
                        </h3>
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
                                condition:
                                    formik.touched.email && formik.errors.email,
                                text: formik.errors.email,
                            }}
                        />

                        <InputField
                            id="phone"
                            name="phone"
                            type="text"
                            label={"Số điện thoại"}
                            placeholder="0123456789 hoặc (+84) 123456789"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            status={
                                formik.touched.phone && formik.errors.phone
                                    ? "error"
                                    : ""
                            }
                            error={{
                                condition:
                                    formik.touched.phone && formik.errors.phone,
                                text: formik.errors.phone,
                            }}
                        />
                    </div>
                    <Divider></Divider>
                    <div className=" w-full flex justify-center items-center gap-5 mb-5">
                        {amount >= 2 && (
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
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fullName2}
                                    status={
                                        formik.touched.fullName2 &&
                                        formik.errors.fullName2
                                            ? "error"
                                            : ""
                                    }
                                    error={{
                                        condition:
                                            formik.touched.fullName2 &&
                                            formik.errors.fullName2,
                                        text: formik.errors.fullName2,
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
                                        formik.touched.email2 &&
                                        formik.errors.email2
                                            ? "error"
                                            : ""
                                    }
                                    error={{
                                        condition:
                                            formik.touched.email2 &&
                                            formik.errors.email2,
                                        text: formik.errors.email2,
                                    }}
                                />

                                <InputField
                                    id="phone2"
                                    name="phone2"
                                    type="text"
                                    label={"Số điện thoại"}
                                    placeholder="0123456789 hoặc (+84) 123456789"
                                    onChange={formik.handleChange}
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
                                            formik.touched.phone2 &&
                                            formik.errors.phone2,
                                        text: formik.errors.phone2,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <Button
                        className="w-full h-fit md:p-3 mb-5 bg-red-600 sm:text-lg text-base text-white border border-slate-500 rounded transition-all hover:bg-blue-800"
                        type="button"
                        onClick={formik.handleSubmit}
                    >
                        <p className="text-white">Tiếp tục</p>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default TicketForm;
