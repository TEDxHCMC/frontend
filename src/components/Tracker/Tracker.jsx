import React from "react";
import ShortDivider from "../ShortDivider";

const steps = [
    {
        index: 1,
        title: "Chọn khung giờ",
    },
    {
        index: 2,
        title: "Điền thông tin",
    },
    {
        index: 3,
        title: "Hoàn tất",
    },
];

const Tracker = ({ currentStep }) => {
    return (
        <div className="w-full flex justify-between items-center mx-auto gap-5">
            {steps.map((step) => {
                const isCurrentStep = step.index === currentStep;
                return (
                    <>
                        <div key={step.index} 
                        className={`flex justify-between items-center gap-5 ${isCurrentStep ? "block" : "hidden lg:flex"}`}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    style={{ lineHeight: "56px", fontFamily: "Inter, sans-serif" }}
                                    className={`w-14 h-14 rounded-full ${
                                        step.index <= currentStep
                                            ? "bg-[#C30121] font-bold "
                                            : "bg-slate-300 font-base"
                                    } text-3xl text-center text-white`}
                                >
                                    {step.index}
                                </div>
                                <p style={{ fontFamily: "Inter, sans-serif" }}
                                    className={`text-xl font-base ${
                                        step.index <= currentStep
                                            ? "text-black font-bold"
                                            : "text-slate-300"
                                    }`}
                                >
                                    {step.title}
                                </p>
                            </div>
                        </div>
                        {step.index !== steps.length && (
                            <div className="hidden lg:block">
                                <ShortDivider />
                            </div>
                        )}
                    </>
                    
                ) 
            })}
        </div>
    );
};

export default Tracker;
