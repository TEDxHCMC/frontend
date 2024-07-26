import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";
import "./secondsection.scss";
import "animate.css";

const SecondSection = () => {
    const dissolveRef = useRef(null);
    const constraintsRef = useRef(null);

    const pattern1 = "/assets/pattern/single-pattern/3-Yellow.png";
    const pattern2 = "/assets/pattern/single-pattern/4-Blue.png";
    const pattern3 = "/assets/pattern/single-pattern/1-Green.png";
    const pattern4 = "/assets/pattern/single-pattern/2-Pink.png";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("dissolve-effect");
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (dissolveRef.current) {
            observer.observe(dissolveRef.current);
        }

        return () => {
            if (dissolveRef.current) {
                observer.unobserve(dissolveRef.current);
            }
        };
    }, []);

    function useParallax(value, distance, scaleFactor) {
        const y = useTransform(value, [0, 1], [distance, -distance]);
        const scale = useTransform(value, [0, 1], [1, scaleFactor]);
        return { y, scale };
    }

    const TextSection = ({
        className,
        imgSrc,
        imgResponsive,
        text,
        textSize,
    }) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({ target: ref });
        const { y, scale } = useParallax(scrollYProgress, 375, 1.5);

        return (
            <motion.div ref={ref} className={className} style={{ y, scale }}>
                <img src={imgSrc} className={imgResponsive} alt="Logo" />
                <h2 className={textSize}>{text}</h2>
            </motion.div>
        );
    };
    return (
        <section>
            <div
                id="scroll-content"
                className="page-2-bg h-[100vh] bg-transparent relative"
            >
                <img
                    className="absolute top-[0%] right-[30%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/4.png"
                />
                <img
                    className="absolute top-[0%] left-[30%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/3.png"
                />
                <img
                    className="absolute top-[15%] left-[5%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/1.png"
                />

                <img
                    className="absolute top-[15%] left-[15%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Yellow.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <img
                    className="absolute top-[15%] right-[5%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/5.png"
                />

                <img
                    className="absolute top-[15%] right-[15%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Green.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <img
                    className="absolute bottom-[15%] left-[10%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/2.png"
                />
                <img
                    className="absolute bottom-[30%] left-[0%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/1-Green.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <img
                    className="absolute bottom-[20%] right-[18%] h-auto
                                        w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/6.png"
                />

                <img
                    className="absolute bottom-[30%] right-[10%] h-auto
                                        w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/3-Yellow.png"
                    style={{ transform: "scale(1.28)" }}
                />
                <img
                    className="absolute bottom-[10%] right-[0%] h-auto
                                        w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Blue.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <div className="page-2-content block absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                    <div ref={dissolveRef} className="w-full pb-4">
                        <TextSection
                            className="second-text absolute top-[65%] left-[15%]"
                            imgSrc="./assets/logo/to-tuong-logo/To-tuong-logo-black.png"
                            imgResponsive="w-[392px] h-auto sm:w-[492px]"
                            text="MỞ LÒNG VỚI THỰC TẠI"
                            textSize="txt text-[10px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[34px] pl-2"
                        />
                    </div>

                    <p
                        className="pt-4 tracking-wide leading-[33px] text-[15px] sm:text-[20px] md:text-[23px] lg:text-[25px] xl:text-[25px]"
                    >
                        "Tỏ tường: Mở lòng với thực tại" là chương trình mùa đầu
                        tiên của TEDxHoChiMinhCity, mang đến những câu chuyện
                        truyền cảm hứng từ các diễn giả tài năng thuộc nhiều
                        lĩnh vực. Các bạn trẻ sẽ được khám phá thế giới từ nhiều
                        góc nhìn, quan điểm khác nhau; đồng thời thấu hiểu và
                        đối mặt với thực tại một cách chân thật nhất.
                    </p>
                </div>
            </div>

            <div className="page-3-bg h-[100vh] relative grid place-items-center">
                <img
                    className="absolute top-[0%] right-[30%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/4.png"
                />
                <img
                    className="absolute top-[0%] left-[30%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/3.png"
                />
                <img
                    className="absolute top-[15%] left-[5%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/1.png"
                />

                <img
                    className="absolute top-[15%] left-[15%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Yellow.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <img
                    className="absolute top-[15%] right-[5%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/5.png"
                />

                <img
                    className="absolute top-[15%] right-[15%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Green.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <img
                    className="absolute bottom-[15%] left-[10%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/2.png"
                />
                <img
                    className="absolute bottom-[30%] left-[0%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/1-Green.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <img
                    className="absolute bottom-[20%] right-[18%] h-auto
                                        w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/6.png"
                />

                <img
                    className="absolute bottom-[30%] right-[10%] h-auto
                                        w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/3-Yellow.png"
                    style={{ transform: "scale(1.28)" }}
                />
                <img
                    className="absolute bottom-[10%] right-[0%] h-auto
                                        w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Blue.png"
                    style={{ transform: "scale(1.28)" }}
                />

                <motion.div
                    className="container flex absolute bg-transparent z-[2] h-full w-full"
                    ref={constraintsRef}
                >
                    <motion.div
                        className="box-1 absolute top-2/4 left-[35%] h-[118.5px] w-[118.5px] flex justify-center items-center text-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{
                            background: `url(${pattern1}) no-repeat center center`,
                            backgroundSize: "cover",
                        }}
                    ></motion.div>
                    <motion.div
                        className="box-2 absolute top-[40%] left-[45%] h-[118.5px] w-[118.5px] flex justify-center items-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{
                            background: `url(${pattern2}) no-repeat center center`,
                            backgroundSize: "cover",
                        }}
                    ></motion.div>
                    <motion.div
                        className="box-3 absolute top-[60%] left-[45%] h-[118.5px] w-[118.5px] flex justify-center items-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{
                            background: `url(${pattern3}) no-repeat center center`,
                            backgroundSize: "cover",
                        }}
                    ></motion.div>
                    <motion.div
                        className="box-4 absolute top-2/4 left-[55%] h-[118.5px] w-[118.5px] flex justify-center items-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{
                            background: `url(${pattern4}) no-repeat center center`,
                            backgroundSize: "cover",
                        }}
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecondSection;
