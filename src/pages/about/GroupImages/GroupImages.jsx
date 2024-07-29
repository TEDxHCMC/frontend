import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./groupimages.scss";
import { Col, Row } from "antd";

// const imageFileNames = [
//     "Chi Jade.png",
//     "DSC00001.png",
//     "DSC00003.png",
//     "DSC00010.png",
//     "DSC00015.png",
//     "DSC00021.png",
//     "DSC00036.png",
//     "DSC00069.png",
//     "DSC00080.png",
//     "DSC00083.png",
//     "DSC00099.png",
//     "DSC00111.png",
//     "DSC00113.png",
//     "DSC00134.png",
//     "DSC00142.png",
//     "DSC00146.png",
//     "DSC00155.png",
//     "DSC00159.png",
//     "DSC00173.png",
//     "DSC00278.png",
//     "DSC00293.png",
//     "DSC00178.png",
//     "DSC00190.png",
//     "DSC00197.png",
//     "DSC00206.png",
//     "DSC00210.png",
//     "DSC00216.png",
//     "DSC00251.png",
//     "DSC00302.png",
// ];

const imageFileNames = [
    "Chi Jade.jpg",
    "DSC00001.jpg",
    "DSC00003.jpg",
    "DSC00010.jpg",
    "DSC00015.jpg",
    "DSC00021.jpg",
    "DSC00036.jpg",
    "DSC00069.jpg",
    "DSC00080.jpg",
    "DSC00083.jpg",
    "DSC00099.jpg",
    "DSC00111.jpg",
    "DSC00113.jpg",
    "DSC00134.jpg",
    "DSC00142.jpg",
    "DSC00146.jpg",
    "DSC00155.jpg",
    "DSC00159.jpg",
    "DSC00173.jpg",
    "DSC00278.jpg",
    "DSC00293.jpg",
    "DSC00178.jpg",
    "DSC00190.jpg",
    "DSC00197.jpg",
    "DSC00206.jpg",
    "DSC00210.jpg",
    "DSC00216.jpg",
    "DSC00251.jpg",
    "DSC00302.jpg",
];

const images = [...imageFileNames, ...imageFileNames];

const GroupImages = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                y: ["0%", "-50%"],
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                },
            });
        }
    }, [controls, inView]);

    const preloadImages = () => {
        const promises = imageFileNames.map(imageName => {
            return new Promise((resolve, reject) => {
                const image = new Image();
                image.src = `./assets/members/${imageName}`;
                image.onload = resolve;
                image.onerror = reject;
            });
        });

        Promise.all(promises)
            .catch(error => console.error('Error preloading images:', error));
    };

    //! PROMISE: handling loading image files
    useEffect(() => {
        preloadImages();
    }, [imageFileNames]);

    return (
        <section className="members mt-7" ref={ref}>
            <h3 className="text-[54px] text-center font-bold">BIỆT ĐỘI TEDX</h3>
            <div className="px-4 mt-8 relative h-[801px] overflow-hidden">
                <div
                    className={`scrolling-section -translate-y-10 ${inView ? 'animate' : ''}`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((url, index) => (
                            <div
                                key={index}
                                className={`w-full lg:h-96 md:h-80 h-72 ${
                                    index % 4 === 1 || index % 4 === 3
                                        ? "relative lg:translate-y-1/2 md:translate-y-0 sm:translate-y-1/2 translate-y-0"
                                        : ""
                                }`}
                            >
                                <img
                                    src={`./assets/members/${url}`}
                                    alt={`image-${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GroupImages;
