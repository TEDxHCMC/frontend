import React from "react";
import "./boxtedx.scss";

const BoxTedx = () => {
    return (
        <section className="about-banner">
            <div className="sm:flex hidden items-center justify-center lg:h-[422px] h-[362px] w-full">
                <div className="box flex justify-center items-center h-full w-1/3 bg-[#ec1014]">
                    <h2 className="lg:text-[56px] md:text-[40px] text-[32px] text-center font-bold">
                        SỨ <br></br> MỆNH
                    </h2>
                </div>
                <div className="flex justify-center items-center h-full w-1/3 bg-white">
                    <img
                        className="block h-16 md:h-20 lg:h-28 object-cover"
                        src="./assets/logo/TEDx-logo/TEDx-Black-Medium.png"
                        alt="TEDxHCMC logo"
                    />
                </div>
                <div className="box flex justify-center items-center h-full w-1/3 bg-black text-white">
                    <h2 className="lg:text-[56px] md:text-[40px] text-[32px] text-center font-bold">
                        TẦM <br></br> NHÌN
                    </h2>
                </div>
            </div>

            <div className="sm:hidden container-edit">
                <div className="box flex justify-center items-center w-full h-[162px] bg-[#ec1014]">
                    <h2 className="text-[32px] text-center font-bold">
                        SỨ MỆNH
                    </h2>
                </div>

                <div className="box flex justify-center items-center w-full h-[162px] bg-white">
                    <img
                        className="object-cover h-20 translate-x-3"
                        src="./assets/logo/TEDx-logo/TEDx-Black-Medium.png"
                        alt="TEDxHCMC logo"
                    />
                </div>

                <div className="box flex justify-center items-center w-full h-[162px] bg-black text-white">
                    <h2 className="text-[32px] text-center font-bold">
                        TẦM NHÌN
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default BoxTedx;
