import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generateRandomUrls } from "../../../helpers";

const Poster = () => {
    const { posterPayload } = useSelector((state) => state.poster);
    const opacityOrder = [1, 2]

    // const numbers = [1, 2, 3, 4];
    // const colors = ["Pink", "Blue", "Green", "Yellow"];

    const createLayout1 = (count, images, order) => {
        let hideIndex = -1
        // Hide 1 sector if shapecount is 3
        if (count == 3) {
            hideIndex = Math.floor(Math.random() * 4) + 1;
        }

        return (
            <div className={`layout1 absolute left-0 top-0 w-full h-full flex flex-col ${order == 1 ? 'opacity-85' : 'opacity-70'}`}>
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-4/6">
                        {hideIndex != 1 && <img
                            src={
                                `${images[0]}`
                            }
                            className="w-full h-full scale-125 -translate-x-0.5 sm:-translate-x-1.5 -translate-y-0.5 sm:-translate-y-1.5"
                        />}
                        
                    </div>
                    <div className="w-2/6 relative">
                        {hideIndex != 2 && <img
                            src={
                                `${images[1]}`
                            }
                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1 scale-[135%]"
                        />}
                    </div>
                </div>
                <div
                    className="bottom flex w-full"
                    style={{
                        height: `30%`,
                    }}
                >
                    <div className="w-4/6 relative">
                        {hideIndex != 3 && <img
                            src={
                                `${images[2]}`
                            }
                            className="h-full object-cover absolute left-1/3 -translate-x-1/3 sm:-translate-y-1.5 -translate-y-1 scale-[137%]"
                        />}
                    </div>
                    <div className="w-2/6 relative">
                        {hideIndex != 4 && <img
                            src={
                                `${images[3]}`
                            }
                            className="h-full object-cover absolute right-0 -translate-x-1 -translate-y-1 sm:-translate-y-1.5 scale-[137%]"
                        />}
                    </div>
                </div>
            </div>
        )
    }

    const createLayout2 = (count, images, order) => {
        let hideIndex = -1
        // Hide 1 sector if shapecount is 3
        if (count == 3) {
            hideIndex = Math.floor(Math.random() * 4) + 1;
        }

        return (
            <div className={`layout2 absolute left-0 top-0 w-full h-full flex ${order == 1 ? 'opacity-85' : 'opacity-70'}`}>
                <div
                    className="poster-left flex flex-col w-1/3"
                >
                    <div className="relative h-[30%]">
                        {hideIndex != 1 && <img
                            src={
                                `${images[0]}`
                            }
                            className="w-full object-cover scale-[137%] translate-x-1.5"
                        />}
                    </div>
                    <div className="relative h-[70%]">
                        {hideIndex != 2 && <img
                            src={
                                `${images[1]}`
                            }
                            className="w-full object-cover scale-[137%] translate-x-1.5 absolute bottom-10"
                        />}
                    </div>
                </div>
                <div
                    className="poster-right w-2/3 h-full"
                >
                    <div className="w-full h-4/6 relative">
                        {hideIndex != 3 && <img
                            src={
                                `${images[2]}`
                            }
                            className="h-full w-full object-cover scale-125 translate-x-1.5 -translate-y-1.5"
                        />}
                    </div>
                    <div className="w-full relative h-2/6">
                        {hideIndex != 3 && <img
                            src={
                                `${images[3]}`
                            }
                            className="h-full object-cover translate-y-1 absolute right-0 -translate-x-5 scale-125"
                        />}
                    </div>
                </div>
            </div>
        )
    }

    const createLayout3 = (count, images, order) => {
        let hideIndex = -1
        // Hide 1 sector if shapecount is 3
        if (count == 3) {
            hideIndex = Math.floor(Math.random() * 4) + 1;
        }

        return (
            <div className={`layout3 absolute left-0 top-0 w-full h-full flex flex-col ${order == 1 ? 'opacity-85' : 'opacity-70'}`}>
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-4/6 relative">
                        {hideIndex != 1 && <img
                            src={
                                `${images[0]}`
                            }
                            className={`w-full h-full scale-125 -translate-y-1.5 -translate-x-1`}
                        />}
                        
                    </div>
                    <div className="w-2/6 relative">
                        {hideIndex != 2 && <img
                            src={
                                `${images[1]}`
                            }
                            className={`scale-[135%] -translate-x-1 absolute top-10`}
                        />}
                    </div>
                </div>
                <div
                    className="bottom flex w-full"
                    style={{
                        height: `30%`,
                    }}
                >
                    <div className="w-2/6 relative h-full">
                        {hideIndex != 3 && <img
                            src={
                                `${images[2]}`
                            }
                            className={`h-full object-cover scale-[137.75%] translate-x-1.5 -translate-y-1.5`}
                        />}
                    </div>
                    <div className="w-4/6 relative h-full">
                        {hideIndex != 4 && <img
                            src={
                                `${images[3]}`
                            }
                            className={`h-full object-cover absolute right-1/4 translate-x-1/3 -translate-y-1.5 scale-[137.75%]`}
                        />}
                    </div>
                </div>
            </div>
        )
    }

    const createLayout4 = (count, images, order) => {
        let hideIndex = -1
        // Hide 1 sector if shapecount is 3
        if (count == 3) {
            hideIndex = Math.floor(Math.random() * 4) + 1;
        }

        return (
            <div className={`layout4 absolute left-0 top-0 w-full h-full flex flex-col ${order == 1 ? 'opacity-85' : 'opacity-70'}`}>
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-2/6 relative">
                        {hideIndex != 1 && <img
                            src={
                                `${images[0]}`
                            }
                            className="scale-[135%] translate-x-1 absolute top-10"
                        />}
                        
                    </div>
                    <div className="w-4/6 relative">
                        {hideIndex != 2 && <img
                            src={
                                `${images[1]}`
                            }
                            className="w-full h-full scale-125 -translate-y-1.5 translate-x-1"
                        />}
                        
                    </div>
                </div>
                <div
                    className="bottom flex w-full"
                    style={{
                        height: `30%`,
                    }}
                >
                    <div className="w-2/6 relative h-full">
                        {hideIndex != 3 && <img
                            src={
                                `${images[2]}`
                            }
                            className="h-full object-cover scale-[137.75%] translate-x-1.5 -translate-y-1.5"
                        />}
                        
                    </div>
                    <div className="w-4/6 relative h-full">
                        {hideIndex != 4 && <img
                            src={
                                `${images[3]}`
                            }
                            className="h-full object-cover absolute right-1/4 translate-x-1/3 -translate-y-1.5 scale-[137.75%]"
                        />}
                    </div>
                </div>
            </div>
        )
    }

    const generateLayout = (index, order) => {
        let images = generateRandomUrls(4)
        
        // let shuffleNums = shuffleArr(numbers)
        // let shuffleColors = shuffleArr(colors)
        // let images = generateUrls(shuffleNums, shuffleColors)
        // console.log("Image urls: ", images);

        return <>
            {/* LAYOUT 1 */}
            {index == 1 && (
                createLayout1(posterPayload.shapeCount, images, order)
            )}

            {/* LAYOUT 3 */}
            {index == 3 && (
                createLayout3(posterPayload.shapeCount, images, order)
            )}

            {/* LAYOUT 4 */}
            {index == 4 && (
                createLayout4(posterPayload.shapeCount, images, order)
            )}

            {/* LAYOUT 2 */}
            {index == 2 && (
                createLayout2(posterPayload.shapeCount, images, order)
            )}
        </>
    };

    return (
        <section
            className={`poster relative ${posterPayload.bgColor}
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
                className={`posterTxt w-full absolute z-50 text-3xl sm:text-4xl md:text-6xl lg:text-7xl p-2 sm:p-5 font-bold ${posterPayload.txtPosition === "text-center" ? "text-center bottom-1/2 translate-y-1/2" : "text-bottom bottom-0"} ${[posterPayload.bgColor === "bg-[#F5F5DC]" ? "text-black" : "text-white"]}`}
            >
                LIỆU <span className="posterName font-light italic">{posterPayload.name}</span> <br></br>
                ĐÃ TỎ TƯỜNG?
            </div>
            
            {generateLayout(posterPayload.layout1, opacityOrder[0])}
            {generateLayout(posterPayload.layout2, opacityOrder[1])}
        </section>
    );
};

export default Poster;
