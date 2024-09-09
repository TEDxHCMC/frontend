import React, { useEffect, useState } from "react";

import "./interactive.scss";

import shapePink from "../../assets/pattern/4-Pink.png";
import shapeGreen from "../../assets/pattern/3-Green.png";
import shapeBlue from "../../assets/pattern/2-Blue.png";
import shapeYellow from "../../assets/pattern/1-Yellow.png";

import RadioList from "../../components/RadioList";

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
        value: "bg-[#FFEB00]"
    }
];

const countOptions = [
    {
        content: "Công việc yêu thích <br /> nhưng lương thấp",
        value: 1
    },
    {
        content: "Công việc lương cao <br /> nhưng không thích",
        value: 2
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

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger re-rendering with animation
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

    const renderHeading = (heading) => (
        <div className={`text-center text-4xl relative mb-10 ${animate ? 'animate__animated animate__fadeIn' : ''}`}>
            <h1 className="uppercase font-medium">
                <span className="text-2xl relative -top-5 -left-2">{`0${step+1}`}</span>
                {heading.topText} <br /> {heading.bottomText}
            </h1>
        </div>
    )

    const renderRadioList = (name, state, options) => (
        <RadioList name={name} onChange={handleChangeOption} option={state} content={options} />
    )

    const renderContent = (
        <section className="interactive h-[70vh] flex flex-col justify-center items-center p-5">
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

            <div className={`steps-circle flex items-center gap-5`}>
                {Array(5).fill().map((_, index) => <div className={`w-2 h-2 rounded-full ${index <= step ? "bg-black" : "bg-slate-300"}`}></div>)}
            </div>
        </section>
    )

    return (
        <>
            {renderContent}
        </>
    );
};

export default Interactive;
