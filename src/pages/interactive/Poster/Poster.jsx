import React from "react";

// import shapePink from "./assets/pattern/4-Pink.png";
// import shapeGreen from "./assets/pattern/3-Green.png";
// import shapeBlue from "./assets/pattern/2-Blue.png";
// import shapeYellow from "./assets/pattern/1-Yellow.png";

const Poster = () => {
    return (
        <section
            className={`poster relative bg-black
                        w-[300px] sm:w-[360px] md:w-[460px] lg:w-[536px] 
                        h-[300px] sm:h-[360px] md:h-[460px] lg:h-[536px]`}
        >
            {/* Layout 2 */}
            <div className="layout2 absolute left-0 top-0 w-full h-full flex flex-col opacity-60">
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-4/6">
                        <img
                            src={"/assets/pattern/single-pattern/4-Pink.png"}
                            className="w-full h-full scale-125"
                        />
                    </div>
                    <div className="w-2/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/1-Yellow.png"}
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
                            src={"/assets/pattern/single-pattern/2-Blue.png"}
                            className="h-full object-cover absolute left-1/3 -translate-x-1/3 scale-125"
                        />
                    </div>
                    <div className="w-2/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/3-Green.png"}
                            className="h-full object-cover absolute right-0 scale-125"
                        />
                    </div>
                </div>
            </div>

            {/* Layout 1 */}
            <div className="layout1 absolute left-0 top-0 w-full h-full flex flex-col opacity-85">
                <div
                    className="top flex w-full"
                    style={{
                        height: `70%`,
                    }}
                >
                    <div className="w-2/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/4-Pink.png"}
                            className="scale-125 -translate-x-1 absolute top-10"
                        />
                    </div>
                    <div className="w-4/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/2-Blue.png"}
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
                            src={"/assets/pattern/single-pattern/3-Green.png"}
                            className="h-full object-cover scale-125 -translate-x-1 translate-y-1"
                        />
                    </div>
                    <div className="w-4/6 relative">
                        <img
                            src={"/assets/pattern/single-pattern/1-Yellow.png"}
                            className="h-full object-cover absolute right-1/4 translate-x-1/3 scale-125"
                        />
                    </div>
                </div>
            </div>

            {/* Text content */}
            <div
                className="absolute bottom-0 text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl p-2 sm:p-5 font-bold"
                style={{
                    fontFamily: `'Phudu Variable', sans-serif !important`,
                }}
            >
                LIỆU <span className="font-light italic">MIRA</span> <br></br>
                ĐÃ TỎ TƯỜNG
            </div>
        </section>
    );
};

export default Poster;

