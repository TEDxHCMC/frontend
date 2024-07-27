import React from "react";

const Poster = () => {
    return (
        <section
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
                LIỆU <span className="font-light italic">MIRA</span> <br></br>
                ĐÃ TỎ TƯỜNG
            </div>

            {/* <div className="layout3 absolute left-0 top-0 w-full h-full flex flex-col opacity-85">
                            <div
                                className="top flex w-full"
                                style={{
                                    height: `70%`,
                                }}
                            >
                                <div className="w-7/12 relative">
                                    <img
                                        src={shapePink}
                                        className="w-full h-full scale-125 -translate-x-2 -translate-y-2"
                                    />
                                </div>
                                <div className="w-5/12 relative">
                                    <img
                                        src={shapeBlue}
                                        className="absolute scale-125  -translate-y-1"
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
            <div className="layout4 absolute left-0 top-0 w-full h-full flex opacity-60">
                            <div
                                className="top flex flex-col w-1/2"
                                // style={{
                                //     height: `70%`,
                                // }}
                            >
                                <div className="w-full">
                                    <img
                                        src={shapePink}
                                        className="w-full h-full scale-125"
                                    />
                                </div>
                                <div className="w-full relative">
                                    <img
                                        src={shapeYellow}
                                        className="absolute scale-125"
                                    />
                                </div>
                            </div>
                            <div
                                className="bottom flex flex-col w-1/2"
                                // style={{
                                //     height: `30%`,
                                // }}
                            >
                                <div className="w-full relative">
                                    <img
                                        src={shapeBlue}
                                        className="h-full scale-125"
                                    />
                                </div>
                                <div className="w-full relative">
                                    <img
                                        src={shapeGreen}
                                        className="h-full scale-125"
                                    />
                                </div>
                            </div>
            </div> */}
        </section>
    );
};

export default Poster;
