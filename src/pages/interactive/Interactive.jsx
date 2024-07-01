import React, { useState } from "react";

import "./interactive.module.scss";

import shapePink from "../../assets/pattern/4-Pink.png";
import shapeGreen from "../../assets/pattern/3-Green.png";
import shapeBlue from "../../assets/pattern/2-Blue.png";
import shapeYellow from "../../assets/pattern/1-Yellow.png";
import { Col, Row } from "antd";
import InputField from "../../components/InputField"

const Interactive = () => {
    const [bgColor, setBgColor] = useState("bg-black");
    const [shapeCount, setShapeCount] = useState(4);
    const [layout1, setLayout1] = useState(1);
    const [layout2, setLayout2] = useState(1);
    const [txtPosition, setTxtPosition] = useState("center");
    const [name, setName] = useState("");

    const bgColorOptions = ["bg-yellow-500", "bg-black"];
    const txtPositionOptions = ["text-center", "text-bottom"];

    return (
        <section className="interactive p-5">
            <Row>
                <Col span={12} className="flex justify-center">
                    <div className="poster-manager bg-slate-100" style={{
                        width: 600,
                        height: 800,
                    }}>
                        <div>
                            <h2>Tên Poster</h2>
                            <input type="text" />
                            <h2>Số lượng pattern</h2>
                            <input type="text" />
                            <h2>Chọn Layout</h2>
                        </div>
                    </div>
                </Col>
                <Col span={12} className="flex justify-center">
                    <div
                        className={`poster relative ${bgColor}`}
                        style={{
                            width: 800,
                            height: 800,
                        }}
                    >
                        <div className="layout2 absolute left-0 top-0 w-full h-full flex flex-col opacity-60">
                            <div
                                className="top flex w-full"
                                style={{
                                    height: `70%`,
                                }}
                            >
                                <div className="w-4/6">
                                    <img
                                        src={shapePink}
                                        className="w-full h-full scale-125"
                                    />
                                </div>
                                <div className="w-2/6 relative">
                                    <img
                                        src={shapeYellow}
                                        className="absolute top-1/2 -translate-y-1/2 scale-125"
                                    />
                                </div>
                            </div>
                            <div
                                className="bottom flex w-full"
                                style={{
                                    height: `30%`,
                                }}
                            >
                                <div className="w-4/6 relative">
                                    <img
                                        src={shapeBlue}
                                        className="h-full object-cover absolute left-1/3 -translate-x-1/3 scale-125"
                                    />
                                </div>
                                <div className="w-2/6 relative">
                                    <img
                                        src={shapeGreen}
                                        className="h-full object-cover absolute right-0 scale-125"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="layout1 absolute left-0 top-0 w-full h-full flex flex-col opacity-85">
                            <div
                                className="top flex w-full"
                                style={{
                                    height: `70%`,
                                }}
                            >
                                <div className="w-2/6 relative">
                                    <img
                                        src={shapePink}
                                        className="scale-125 -translate-x-1 absolute top-10"
                                    />
                                </div>
                                <div className="w-4/6 relative">
                                    <img
                                        src={shapeBlue}
                                        className="w-full h-full scale-125"
                                    />
                                </div>
                            </div>
                            <div
                                className="bottom flex w-full"
                                style={{
                                    height: `30%`,
                                }}
                            >
                                <div className="w-2/6 relative">
                                    <img
                                        src={shapeGreen}
                                        className="h-full object-cover scale-125 -translate-x-1 translate-y-1"
                                    />
                                </div>
                                <div className="w-4/6 relative">
                                    <img
                                        src={shapeYellow}
                                        className="h-full object-cover absolute right-1/4 translate-x-1/3 scale-125"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute bottom-0 text-white text-9xl p-5 font-bold"
                            style={{
                                fontFamily: `'Phudu Variable', sans-serif !important`,
                            }}
                        >
                            LIỆU <span className="font-light italic">MIRA</span>{" "}
                            <br></br>
                            ĐÃ TỎ TƯỜNG
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Interactive;
