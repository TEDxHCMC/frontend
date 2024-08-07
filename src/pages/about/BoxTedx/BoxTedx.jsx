import { useRef } from "react";
import "./boxtedx.scss";
import { delay, easeInOut, motion, useInView } from "framer-motion";

const BoxTedx = () => {
    const topRef = useRef(null)
    const bottomRef = useRef(null)

    const topInView = useInView(topRef, {
        triggerOnce: true
    });

    const bottomInView = useInView(bottomRef, {
        triggerOnce: true
    });

    return (
        <section className="about-banner">
            <div className="sm:flex hidden items-center justify-center lg:h-[482px] h-[362px] w-full">
                <div className="left-box relative flex justify-center items-center h-full w-1/3 bg-[#ec1014]">
                    <h2 className="box-text lg:text-[56px] md:text-[40px] text-[32px] text-center font-bold">
                        TẦM <br></br> NHÌN
                    </h2>
                    <div className="box-content w-full h-full absolute top-0 left-0 bg-[#ec1014]">
                        <p className="text-center font-light px-12 absolute top-1/2 -translate-y-1/2 text-[14px] sm:text-[24px] sm:leading-[32px] leading-[18px]">
                            TEDxHoChiMinhCity là nơi kết nối các
                            bạn trẻ tràn đầy nhiệt huyết thông qua các hoạt động trải nghiệm sự
                            kiện chứa đựng những câu chuyện mới mẻ, đầy cảm hứng.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center h-full w-1/3 bg-white">
                    <img
                        className="block h-16 md:h-20 lg:h-28 object-cover"
                        src="./assets/logo/TEDx-logo/TEDx-Black-Medium.png"
                        alt="TEDxHCMC logo"
                    />
                </div>
                <div className="right-box relative flex justify-center items-center h-full w-1/3 bg-black text-white">
                    <h2 className="box-text lg:text-[56px] md:text-[40px] text-[32px] text-center font-bold">
                        SỨ <br></br> MỆNH
                    </h2>
                    <div className="box-content w-full h-full absolute top-0 left-0 bg-black">
                        <p className="text-center font-light text-white px-12 absolute top-1/2 -translate-y-1/2 text-[14px] sm:text-[24px] sm:leading-[32px] leading-[18px]">
                            TEDxHoChiMinhCity mong muốn cùng các bạn trẻ khám phá thế giới qua
                            những câu chuyện truyền cảm hứng và nhân văn, mở ra những góc nhìn
                            mới và tạo nên những tác động tích cực cho bản thân và cộng đồng.
                        </p>
                    </div>
                </div>
            </div>

            <div className="banner-small sm:hidden container-edit">
                <div className="relative flex justify-center items-center w-full h-[162px] bg-[#ec1014]" ref={topRef}>
                    <h2 className="text-[32px] text-center font-bold">
                        TẦM NHÌN
                    </h2>
                    {topInView && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0, 0] }}
                            transition={{ duration: 14, repeat: Infinity, times: [0, 0.1, 0.6, 0.7, 1], delay: 1.5, ease: easeInOut}}
                            className={`w-full h-full absolute top-0 left-0 bg-[#ec1014]`}
                        >
                            <p className="py-2 text-center font-light px-12 absolute top-1/2 -translate-y-1/2 text-[14px] sm:text-[24px] sm:leading-[32px] leading-[18px]">
                                TEDxHoChiMinhCity là nơi kết nối các
                                bạn trẻ tràn đầy nhiệt huyết thông qua các hoạt động trải nghiệm sự
                                kiện chứa đựng những câu chuyện mới mẻ, đầy cảm hứng.
                            </p>
                        </motion.div>
                    )}
                </div>

                <div className="box flex justify-center items-center w-full h-[162px] bg-white">
                    <img
                        className="object-cover h-20 translate-x-3"
                        src="./assets/logo/TEDx-logo/TEDx-Black-Medium.png"
                        alt="TEDxHCMC logo"
                    />
                </div>

                <div className="relative flex justify-center items-center w-full h-[162px] bg-black text-white" ref={bottomRef}>
                    <h2 className="text-[32px] text-center font-bold">
                        SỨ MỆNH
                    </h2>
                    {bottomInView && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0, 0] }}
                            transition={{ duration: 14, repeat: Infinity, times: [0, 0.1, 0.6, 0.7, 1], delay: 1.5, ease: easeInOut}}
                            className={`w-full h-full absolute top-0 left-0 bg-black z-10]`}
                        >
                            <p className="py-2 text-center font-light text-white px-12 absolute top-1/2 -translate-y-1/2 text-[14px] sm:text-[24px] sm:leading-[32px] leading-[18px]">
                            TEDxHoChiMinhCity mong muốn cùng các bạn trẻ khám phá thế giới qua
                            những câu chuyện truyền cảm hứng và nhân văn, mở ra những góc nhìn
                            mới và tạo nên những tác động tích cực cho bản thân và cộng đồng.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BoxTedx;
