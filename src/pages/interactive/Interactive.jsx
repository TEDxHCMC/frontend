import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import "./interactive.scss";

import RadioList from "../../components/RadioList";
import Poster from "./Poster";
import { useDispatch } from "react-redux";
import { handleSetPosterPayload } from "../../redux/slices/poster.slice";
import { generateRandomUrls } from "../../helpers";

const headingOptions = [
    {
        topText: "Bạn là",
        bottomText: "người hướng nội hay hướng ngoại?"
    },
    {
        topText: "Bạn sẽ",
        bottomText: "chọn công việc nào?"
    },
    {
        topText: "Khi gặp một vấn đề khó khăn ",
        bottomText: "Bạn sẽ:"
    },
    {
        topText: "Khi chạm mặt người yêu cũ",
        bottomText: "Bạn sẽ:"
    },
    {
        topText: "Bạn muốn",
        bottomText: "có siêu năng lực nào?"
    }
]

const bgOptions = [
    {
        content: "Hướng nội",
        value: "bg-black"
    },
    {
        content: "Hướng ngoại",
        value: "bg-[#F5F5DC]"
    }
];

const countOptions = [
    {
        content: "Công việc yêu thích <br /> nhưng lương thấp",
        value: 3
    },
    {
        content: "Công việc lương cao <br /> nhưng không thích",
        value: 4
    }
];

const layoutOptions1 = [
    {
        content: "Khiến mình bận rộn <br /> để không suy nghĩ",
        value: 1
    },
    {
        content: "Tìm sự chia sẻ, giúp đỡ",
        value: 2
    },
    {
        content: "Mỉm cười, đón nhận và đối mặt",
        value: 3
    },
    {
        content: "Trốn đến một nơi yên tĩnh, <br /> từ từ giải quyết",
        value: 4
    }
];

const layoutOptions2 = [
    {
        content: "Vẫy tay chào hỏi thân thiện",
        value: 1
    },
    {
        content: "Suy và đòi quay lại",
        value: 2
    },
    {
        content: "Né tránh, bỏ chạy",
        value: 3
    },
    {
        content: "Đứng nhìn chằm chằm",
        value: 4
    }
];

const txtPositionOptions = [
    {
        content: "Đọc được suy nghĩ của người khác",
        value: "text-center"
    },
    {
        content: "Biết được cảm xúc của người khác",
        value: "text-bottom"
    }
];

const Interactive = () => {
    const [step, setStep] = useState(0)
    const [bgColor, setBgColor] = useState(null);
    const [shapeCount, setShapeCount] = useState(null);
    const [layout1, setLayout1] = useState(null);
    const [layout2, setLayout2] = useState(null);
    const [txtPosition, setTxtPosition] = useState(null);
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    const [animate, setAnimate] = useState(false);
    const [imageLoadTimes, setImageLoadTimes] = useState([]);
    const dispatch = useDispatch()

    //* Trigger re-rendering with animation
    useEffect(() => {
        console.log("URLs: ", generateRandomUrls(4))
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 1500); // duration of the animation
        return () => clearTimeout(timer);
    }, [step]);

    const mainOptions = [
        {
            name: "background",
            state: bgColor,
            heading: headingOptions[0],
            subOption: bgOptions
        },
        {
            name: "shapeCount",
            state: shapeCount,
            heading: headingOptions[1],
            subOption: countOptions
        },
        {
            name: "layout1",
            state: layout1,
            heading: headingOptions[2],
            subOption: layoutOptions1
        },
        {
            name: "layout2",
            state: layout2,
            heading: headingOptions[3],
            subOption: layoutOptions2
        },
        {
            name: "txtPos",
            state: txtPosition,
            heading: headingOptions[4],
            subOption: txtPositionOptions
        }
    ]

    const handleChangeOption = (e) => {
        console.log(`Current Value [${e.target.name}]:`, e.target.value);

        switch (e.target.name) {
            case "background":
                setBgColor(e.target.value)
                break;
            case "shapeCount":
                setShapeCount(e.target.value)
                break;
            case "layout1":
                setLayout1(e.target.value)
                break;
            case "layout2":
                setLayout2(e.target.value)
                break;
            case "txtPos":
                setTxtPosition(e.target.value)
                break;
            default:
                return
        }
    };

    const handleForwardStep = (e) => {
        setStep(step + 1)
    }

    const handleReturnStep = (e) => {
        setStep(step - 1)
    }

    const handleCompleteClick = () => {
        setPage(2);
    };

    const handleCreateClick = () => {
        const payload = {
            bgColor,
            shapeCount,
            layout1,
            layout2,
            txtPosition,
            name,
        }
        dispatch(handleSetPosterPayload(payload))
        // console.log("Current Payload: ", payload)

        setPage(3);
    };


    const renderHeading = (heading) => (
        <div className={`text-center relative mb-10 ${animate ? 'animate__animated animate__fadeIn' : ''}`}>
            <h1 className="uppercase font-medium text-3xl md:text-4xl lg:text-5xl">
                <span className="text-lg md:text-xl lg:text-2xl relative -top-5 -left-2">{`0${step + 1}`}</span>
                {heading.topText} <br /> {heading.bottomText}
            </h1>
        </div>
    );


    const renderRadioList = (name, state, options) => (
        <RadioList name={name} onChange={handleChangeOption} option={state} content={options} />
    )

    const renderContent = (
        <section className="interactive h-[70vh] flex flex-col justify-center items-center p-10 sm:p-5">
            {renderHeading(mainOptions[step].heading)}
            <div className="flex justify-center items-center gap-5 mb-10">
                <button className={`${step == 0 ? "hidden" : ""}`} onClick={handleReturnStep} disabled={step == 0 ? true : false}>
                    <i className="fa-regular fa-chevron-left text-lg"></i>
                </button>
                {renderRadioList(mainOptions[step].name, mainOptions[step].state, mainOptions[step].subOption)}
                <button className={`${step == 4 ? "hidden" : ""} ${!mainOptions[step].state ? "opacity-15" : ""}`} onClick={handleForwardStep} disabled={step == 4 || !mainOptions[step].state ? true : false}>
                    <i className="fa-regular fa-chevron-right text-lg"></i>
                </button>
            </div>

            {step === 4 ? (
                <button
                    className={`flex flex-row items-center text-white bg-black py-3 px-4 hover:scale-105 ${!mainOptions[step].state ? "opacity-15 cursor-not-allowed" : ""}`}
                    onClick={handleCompleteClick}
                    disabled={!mainOptions[step].state}
                >
                    <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 8.56039L9.16 14.1004L19.5 2.90039" stroke="white" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-2">Hoàn Thành</span>
                </button>

            ) : (
                <div className="steps-circle flex items-center gap-5">
                    {Array(5).fill().map((_, index) => (
                        <div key={index} className={`w-2 h-2 rounded-full ${index <= step ? "bg-black" : "bg-slate-300"}`} />
                    ))}
                </div>
            )}
        </section>
    )

    const renderPage2 = (
        <section className="page-2 relative flex flex-col space-y-6 justify-center items-center h-[70vh] mb-2 sm:mb-12 p-10 sm:p-5 md:p-8">
            <div className="flex flex-row items-center space-x-3">
                <h1 className="whitespace-nowrap text-[22px] sm:text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-white">
                    TÊN BẠN LÀ:
                </h1>
                <input
                    className="bg-transparent border-b-2 border-white text-white text-lg sm:text-base md:text-lg placeholder-white focus:outline-none focus:border-red-500 font-[Petit Formal Script]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button
                className={`font-bold text-black bg-white py-3 px-4 hover:bg-[#C30121] hover:text-white hover:scale-105 
                ${!name.trim() ? 'opacity-15' : ''}`}
                onClick={handleCreateClick}
                disabled={!name.trim()}
            >
                TẠO NGAY
            </button>

            <div className="absolute bottom-[-30%] sm:bottom-[-30%] md:bottom-[-40%] lg:bottom-[-50%] 
                        w-[374px] sm:w-[474px] md:w-[574px] lg:w-[674px] overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="./assets/logo/monogram/Mono-white.png"
                    alt="Monogram"
                />
            </div>
        </section>
    );

    useEffect(() => {
        const randomTimes = Array.from({ length: 10 }, () => Math.random() * 7000);
        setImageLoadTimes(randomTimes);
    }, []);

    const images = [
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[120px] sm:w-[150px] md:w-[170px] lg:w-[211px] left-[25%] sm:left-[35%] top-[30%] sm:top-[35%]', rotate: 15 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[150px] sm:w-[180px] md:w-[210px] lg:w-[269px] right-[20%] sm:right-[30%] bottom-[25%] sm:bottom-[20%]', rotate: -11 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[60px] sm:w-[90px] md:w-[110px] lg:w-[124px] left-[10%] sm:left-[18%] top-[18%] sm:top-[22%]', rotate: 19 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[60px] sm:w-[90px] md:w-[110px] lg:w-[124px] left-[5%] sm:left-[0%] top-[45%] sm:top-[50%]', rotate: -24 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[60px] sm:w-[90px] md:w-[110px] lg:w-[124px] left-[15%] sm:left-[20%] top-[60%] sm:top-[60%]', rotate: -5 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[140px] sm:w-[170px] md:w-[190px] lg:w-[219px] left-[3%] sm:left-[5%] bottom-[5%] sm:bottom-[0%]', rotate: -16 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[30px] sm:w-[70px] md:w-[90px] lg:w-[97px] left-[50%] sm:left-[45%] bottom-[10%] sm:bottom-[2%]', rotate: 19 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[60px] sm:w-[90px] md:w-[110px] lg:w-[124px] right-[15%] sm:right-[20%] top-[15%] sm:top-[20%]', rotate: -24 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[110px] sm:w-[160px] md:w-[180px] lg:w-[214px] right-[5%] sm:right-[0%] top-[40%] sm:top-[40%]', rotate: 7 },
        { src: './assets/logo/monogram/Mono-white.png', className: 'w-[60px] sm:w-[90px] md:w-[110px] lg:w-[124px] right-[15%] sm:right-[15%] bottom-[5%] sm:bottom-[2%]', rotate: -11 },

    ];
    const loadingPage = (
        <section className="loading bg-[#222222] h-screen flex flex-col justify-center items-center relative">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image.src}
                    className={`absolute ${image.className}`}
                    alt="Monogram"
                    initial={{ opacity: 0, scale: 0.5, rotate: image.rotate }}
                    animate={{ opacity: 1, scale: 1, rotate: image.rotate }}
                    transition={{ delay: imageLoadTimes[index] / 1000, duration: 0.5 }}
                />
            ))}

        </section>
    );

    //const renderPoster = ();
    return (
        <>
            <div className={`content-container relative flex justify-center items-center h-screen w-full overflow-hidden
                ${page === 3 ? "hidden" : ""}
                ${page === 1 ? "bg-white" : "bg-[#222222]"}`}>
                <div className="content-background inset-0">
                    <img
                        className="absolute bottom-[10%] left-[10%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                        src="./assets/pattern/overlay-pattern/7.png"
                    />
                    <img
                        className="absolute bottom-[25%] right-[5%] h-auto
                                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                        src="./assets/pattern/overlay-pattern/6.png"
                    />
                    <img
                        className="absolute top-[20%] left-[10%] h-auto
                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                        src="./assets/pattern/single-pattern/4-Pink.png"
                        style={{ transform: "scale(1.28)" }}
                    />
                    <img
                        className="absolute top-[10%] right-[0%] h-auto
                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                        src="./assets/pattern/single-pattern/1-Green.png"
                        style={{ transform: "scale(1.28)" }}
                    />
                    <img
                        className="absolute bottom-[25%] left-[0%] h-auto
                w-[65px] sm:w-[78px] md:w-[85px] lg:w-[95px] xl:w-[100px]"
                        src="./assets/pattern/single-pattern/2-Blue.png"
                        style={{ transform: "scale(1.28)" }}
                    />
                </div>
                <div className="content-box absolute z-1">
                    {page === 1 && renderContent}
                    {page === 2 && renderPage2}
                </div>
            </div>

            {page === 3 && (
                <section className="page-3 bg-[#222222] h-screen flex flex-col justify-center items-center">
                <div className="container items-center justify-center flex flex-col lg:flex-row lg:space-x-24  space-y-5 md:space-y-10 lg:space-y-0">
                    <div className="first h-full flex flex-col justify-between items-center lg:items-start text-center lg:text-left">
                        <div>
                            <h1 className="uppercase text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-semibold text-white mb-4">
                                Ta-daaaa!
                            </h1>
                        </div>
                        {/* <div>
                            <p className="text-lg sm:text-xl md:text-2xl text-white mb-2">Bạn thuộc tuýp</p>
                            <h2 className="uppercase text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-white mb-2">
                                Người năng động
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white">- dám nghĩ, dám làm!</p>
                        </div> */}
                        <div className="social-media mt-6 flex flex-col items-center lg:items-start">
                            <p className="text-white">Chia sẻ ảnh:</p>
                            <div className="mt-4 flex gap-4">
                                <Link to="https://www.facebook.com/share/p4HgwXHXcuiwYhPU/?mibextid=LQQJ4" className="text-white hover:text-gray-400">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </Link>
                                <Link to="https://www.instagram.com/tedxhcmc?igsh=MTd0MmwybTlrNDIwbQ==" className="text-white hover:text-gray-400">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <section className="flex justify-center items-center 
                    w-[340px] sm:w-[400px] md:w-[500px] lg:w-[566px] 
                    h-[340px] sm:h-[400px] md:h-[500px] lg:h-[566px] bg-white p-[10px] sm:p-[15px]">
                        <Poster />
                    </section>
                </div>
            </section>
            
            )}

            {/* <div className="flex flex-col justify-center items-center">
                <Poster />
            </div> */}
            
        </>
    );
};

export default Interactive;
