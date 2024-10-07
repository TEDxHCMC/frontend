import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generateRandomUrls } from "../../../helpers";

const Poster = () => {
    const { posterPayload } = useSelector((state) => state.poster);
    const [hideIndex, setHideIndex] = useState(0);

    

    // console.log("URLs: ", generateRandomUrls(4))

    const generateLayout = (index) => {
        const images = generateRandomUrls(4)
        console.log("Image urls: ", images);

        return <>
            {/* LAYOUT 1 */}
            {index == 1 && (
                <div className="layout1 absolute left-0 top-0 w-full h-full flex flex-col opacity-60">
                    <div
                        className="top flex w-full"
                        style={{
                            height: `70%`,
                        }}
                    >
                        <div className="w-4/6">
                            <img
                                src={
                                    `${images[0]}`
                                }
                                className="w-full h-full scale-125 -translate-x-1.5 -translate-y-1.5"
                            />
                        </div>
                        <div className="w-2/6 relative">
                            <img
                                src={
                                    `${images[1]}`
                                }
                                className="absolute top-1/2 -translate-y-1/2 -translate-x-1 scale-[135%]"
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
                                src={
                                    `${images[2]}`
                                }
                                className="h-full object-cover absolute left-1/3 -translate-x-1/3 -translate-y-1.5 scale-[137%]"
                            />
                        </div>
                        <div className="w-2/6 relative">
                            <img
                                src={
                                    `${images[3]}`
                                }
                                className="h-full object-cover absolute right-0 -translate-x-1 -translate-y-1.5 scale-[137%]"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* LAYOUT 3 */}
            {index == 3 && (
                <div className="layout3 absolute left-0 top-0 w-full h-full flex flex-col opacity-85">
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-4/6 relative">
                        <img
                            src={
                                `${images[0]}`
                            }
                            className="w-full h-full scale-125 -translate-y-1.5 -translate-x-1"
                        />
                    </div>
                    <div className="w-2/6 relative">
                        <img
                            src={
                                `${images[1]}`
                            }
                            className="scale-[135%] -translate-x-1 absolute top-10"
                        />
                    </div>
                </div>
                <div
                    className="bottom flex w-full"
                    style={{
                        height: `30%`,
                    }}
                >
                    <div className="w-2/6 relative h-full">
                        <img
                            src={
                                `${images[2]}`
                            }
                            className="h-full object-cover scale-[137.75%] translate-x-1.5 -translate-y-1.5"
                        />
                    </div>
                    <div className="w-4/6 relative h-full">
                        <img
                            src={
                                `${images[3]}`
                            }
                            className="h-full object-cover absolute right-1/4 translate-x-1/3 -translate-y-1.5 scale-[137.75%]"
                        />
                    </div>
                </div>
            </div>
            )}

            {/* LAYOUT 4 */}
            {index == 4 && (
                <div className="layout4 absolute left-0 top-0 w-full h-full flex flex-col opacity-85">
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-2/6 relative">
                        <img
                            src={
                                `${images[0]}`
                            }
                            className="scale-[135%] translate-x-1 absolute top-10"
                        />
                    </div>
                    <div className="w-4/6 relative">
                        <img
                            src={
                                `${images[1]}`
                            }
                            className="w-full h-full scale-125 -translate-y-1.5 translate-x-1"
                        />
                    </div>
                </div>
                <div
                    className="bottom flex w-full"
                    style={{
                        height: `30%`,
                    }}
                >
                    <div className="w-2/6 relative h-full">
                        <img
                            src={
                                `${images[2]}`
                            }
                            className="h-full object-cover scale-[137.75%] translate-x-1.5 -translate-y-1.5"
                        />
                    </div>
                    <div className="w-4/6 relative h-full">
                        <img
                            src={
                                `${images[3]}`
                            }
                            className="h-full object-cover absolute right-1/4 translate-x-1/3 -translate-y-1.5 scale-[137.75%]"
                        />
                    </div>
                </div>
            </div>
            )}

            {/* LAYOUT 2 */}
            {index == 2 && (
                <div className="layout2 absolute left-0 top-0 w-full h-full flex opacity-85">
                <div
                    className="poster-left flex flex-col w-1/3"
                >
                    <div className="relative h-[30%]">
                        <img
                            src={
                                `${images[0]}`
                            }
                            className="w-full object-cover scale-[137%] translate-x-1.5"
                        />
                    </div>
                    <div className="relative h-[70%]">
                        <img
                            src={
                                `${images[1]}`
                            }
                            className="w-full object-cover scale-[137%] translate-x-1.5 absolute bottom-10"
                        />
                    </div>
                </div>
                <div
                    className="poster-right w-2/3 h-full"
                >
                    <div className="w-full h-4/6 relative">
                        <img
                            src={
                                `${images[2]}`
                            }
                            className="h-full w-full object-cover scale-125 translate-x-1.5 -translate-y-1.5"
                        />
                    </div>
                    <div className="w-full relative h-2/6">
                        <img
                            src={
                                `${images[3]}`
                            }
                            className="h-full object-cover translate-y-1 absolute right-0 -translate-x-5 scale-125"
                        />
                    </div>
                </div>
            </div>
            )}
        </>
    };

    return (
        <section
            className={`poster relative bg-black
                        w-[300px] sm:w-[360px] md:w-[460px] lg:w-[536px] 
                        h-[300px] sm:h-[360px] md:h-[460px] lg:h-[536px]`}
        >
            {/* Layout 1 */}
            {/* <div className="layout1 absolute left-0 top-0 w-full h-full flex flex-col opacity-60">
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-4/6">
                        <img
                            src={"/assets/pattern/single-pattern/4-Pink.png"}
                            className="w-full h-full scale-125 -translate-x-1.5 -translate-y-1.5"
                        />
                    </div>
                    <div className="w-2/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/1-Yellow.png"}
                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1 scale-[135%]"
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
                            src={"/assets/pattern/single-pattern/2-Blue.png"}
                            className="h-full object-cover absolute left-1/3 -translate-x-1/3 -translate-y-1.5 scale-[137%]"
                        />
                    </div>
                    <div className="w-2/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/3-Green.png"}
                            className="h-full object-cover absolute right-0 -translate-x-1 -translate-y-1.5 scale-[137%]"
                        />
                    </div>
                </div>
            </div> */}

            {/* Layout 4 */}
            {/* <div className="layout4 absolute left-0 top-0 w-full h-full flex flex-col opacity-85">
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-2/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/4-Pink.png"}
                            className="scale-[135%] translate-x-1 absolute top-10"
                        />
                    </div>
                    <div className="w-4/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/2-Blue.png"}
                            className="w-full h-full scale-125 -translate-y-1.5 translate-x-1"
                        />
                    </div>
                </div>
                <div
                    className="bottom flex w-full"
                    style={{
                        height: `30%`,
                    }}
                >
                    <div className="w-2/6 relative h-full">
                        <img
                            src={"/assets/pattern/single-pattern/3-Green.png"}
                            className="h-full object-cover scale-[137.75%] translate-x-1.5 -translate-y-1.5"
                        />
                    </div>
                    <div className="w-4/6 relative h-full">
                        <img
                            src={"/assets/pattern/single-pattern/1-Yellow.png"}
                            className="h-full object-cover absolute right-1/4 translate-x-1/3 -translate-y-1.5 scale-[137.75%]"
                        />
                    </div>
                </div>
            </div> */}

            {/* Layout 2 */}
            {/* <div className="layout2 absolute left-0 top-0 w-full h-full flex opacity-85">
                <div
                    className="poster-left flex flex-col w-1/3"
                >
                    <div className="relative h-[30%]">
                        <img
                            src={"/assets/pattern/single-pattern/4-Pink.png"}
                            className="w-full object-cover scale-[137%] translate-x-1.5"
                        />
                    </div>
                    <div className="relative h-[70%]">
                        <img
                            src={"/assets/pattern/single-pattern/2-Blue.png"}
                            className="w-full object-cover scale-[137%] translate-x-1.5 absolute bottom-10"
                        />
                    </div>
                </div>
                <div
                    className="poster-right w-2/3 h-full"
                >
                    <div className="w-full h-4/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/3-Green.png"}
                            className="h-full w-full object-cover scale-125 translate-x-1.5 -translate-y-1.5"
                        />
                    </div>
                    <div className="w-full relative h-2/6">
                        <img
                            src={"/assets/pattern/single-pattern/1-Yellow.png"}
                            className="h-full object-cover -translate-y-1.5 absolute right-0 -translate-x-5 scale-[137%]"
                        />
                    </div>
                </div>
            </div> */}

            {/* Layout 3 */}
            {/* <div className="layout3 absolute left-0 top-0 w-full h-full flex flex-col opacity-85">
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-4/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/2-Blue.png"}
                            className="w-full h-full scale-125 -translate-y-1.5 -translate-x-1"
                        />
                    </div>
                    <div className="w-2/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/4-Pink.png"}
                            className="scale-[135%] -translate-x-1 absolute top-10"
                        />
                    </div>
                </div>
                <div
                    className="bottom flex w-full"
                    style={{
                        height: `30%`,
                    }}
                >
                    <div className="w-2/6 relative h-full">
                        <img
                            src={"/assets/pattern/single-pattern/3-Green.png"}
                            className="h-full object-cover scale-[137.75%] translate-x-1.5 -translate-y-1.5"
                        />
                    </div>
                    <div className="w-4/6 relative h-full">
                        <img
                            src={"/assets/pattern/single-pattern/1-Yellow.png"}
                            className="h-full object-cover absolute right-1/4 translate-x-1/3 -translate-y-1.5 scale-[137.75%]"
                        />
                    </div>
                </div>
            </div> */}

            {/* Text content */}
            <div
                className="absolute z-50 bottom-0 text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl p-2 sm:p-5 font-bold"
                style={{
                    fontFamily: `'Phudu Variable', sans-serif !important`,
                }}
            >
                LIỆU <span className="font-light italic">MIRA</span> <br></br>
                ĐÃ TỎ TƯỜNG?
            </div>
            
            {generateLayout(1)}
            {generateLayout(4)}
        </section>
    );
};

export default Poster;
