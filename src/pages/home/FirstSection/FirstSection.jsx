import React, { useEffect, useRef, useState } from "react";
import "./firstsection.scss";
import "animate.css";

const FirstSection = () => {
    const textContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textContainerRef.current) {
                const textContainerTop =
                    textContainerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Trigger scroll animation when container is in view
                if (textContainerTop < windowHeight * 0.5) {
                    setScrollTriggered(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const dissolveRef = useRef(null);

    const scrollToContent = () => {
        const targetElement = document.getElementById("scroll-content");
        if (targetElement) {
            const yOffset = -100; // Adjust as needed
            const y =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

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

    return (
        <section className="page-1 flex relative place-items-center h-screen">
            <div className="page-1-bg inset-0">
                <img
                    className="absolute top-[57%] left-[30%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/overlay-pattern/7.jpg"
                />
                <img
                    className="absolute bottom-[25%] left-[10%] h-auto
                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Blue.png"
                    style={{ transform: "scale(1.28)" }}
                />
                <img
                    className="absolute top-[70%] right-[30%] h-auto
                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/4-Green.png"
                    style={{ transform: "scale(1.28)" }}
                />
                <img
                    className="absolute top-[30%] right-[20%] h-auto
                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                    src="./assets/pattern/single-pattern/3-Yellow.png"
                    style={{ transform: "scale(1.28)" }}
                />
            </div>

            <div
                ref={dissolveRef}
                className="page-1-content absolute top-2/4 bottom-2/4 z-[1] text-center h-auto w-full 
            text-[28px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[40px] "
            >
                Liệu bạn đã nhìn đủ...
            </div>
            <div className="content-interaction w-full h-full absolute z-[2] text-[45px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[115px]">
                <div className="text-position-1 absolute top-[35%] left-[20%] whitespace-nowrap">
                    <h2 onClick={scrollToContent}>lâu?</h2>
                </div>
                <div className="text-position-2 absolute top-[35%] right-[10%] whitespace-nowrap">
                    <h2 onClick={scrollToContent}>kĩ càng?</h2>
                </div>
                <div className="text-position-3 absolute bottom-[30%] right-[20%] whitespace-nowrap">
                    <h2 onClick={scrollToContent}>rõ?</h2>
                </div>
                <div className="text-position-4 absolute bottom-[15%] right-[30%] whitespace-nowrap">
                    <h2 onClick={scrollToContent}>sâu?</h2>
                </div>
                <div className="text-position-5 absolute bottom-[30%] left-[10%] whitespace-nowrap">
                    <h2 onClick={scrollToContent}>tường tận?</h2>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
