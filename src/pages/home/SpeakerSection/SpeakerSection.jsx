
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import './speakersection.scss';

const SpeakerSection = () => {
    const navigate = useNavigate()
    const handleOnClick = (e) => {
        e.preventDefault();
        navigate("/ticket")

    }
    const [visibleTimelineSection, setVisibleTimelineSection] = useState(1);
    const [activeSpeaker, setActiveSpeaker] = useState('speaker-0');

    const handleClick = (id) => {
        console.log(`Button clicked: ${id}`);
        setVisibleTimelineSection(id);
    };

    const [selectedSession, setSelectedSession] = useState(null);  // To track the selected session

    const handleSpeakerClick = (speakerId) => {
        setActiveSpeaker(speakerId);
        console.log('Button is clicked');
    };

    const sessions = [
        {
            name: "Phiên  Sáng",
            time: "08:00 - 12:30",
            value: "1",
        },
        {
            name: "Phiên Chiều",
            time: "14:00 - 18:30",
            value: "2",
        },
    ];

    const handleChangeSession = (value) => {
        if (value.length > 0) {
            const selectedValue = value[value.length - 1]; // Get the latest checked value
            setSelectedSession(selectedValue);  // Update the selected session state
            setVisibleTimelineSection(parseInt(selectedValue)); // Update visible timeline based on the selection
        } else {
            setSelectedSession(null); // If no session is selected, clear the selection
        }
    };

    return (
        <div>
            <div className='background-speaker flex flex-col sm:flex-row pb-8
                lg: justify-between 
                ml-4 sm:ml-4 md:ml-12 lg:ml-16 xl:ml-20
                mr-4 sm:mr-4 md:mr-12 lg:mr-16 xl:mr-20'>
                <div className='speaker-heading pl-4 pr-0 md:p-0'>
                    <h1 className='color-[#000000] mb-[15px] font-bold
                    text-[30px] sm:text-[33px] md:text-[35px] lg:text-[38px] xl:text-[40px] '>
                        Chương Trình
                        <span className='inline md:block lg:inline'> Sự Kiện</span>
                    </h1>
                    <div className='tedx-section flex flex-col sm:flex-row
                    gap-x-2 sm:gap-x-4
                    gap-y-2 sm:gap-y-0
                    mb-[16px] sm:mb-[1rem] xl:mb-[2rem]'>
                        <Checkbox.Group
                            onChange={handleChangeSession}
                            value={selectedSession ? [selectedSession] : []}  // Ensure only one selection at a time
                        >
                            <div className="session flex flex-wrap justify-normal gap-3">
                                {sessions.map((session, index) => (
                                    <Checkbox
                                        key={index}
                                        value={session.value}
                                        className={`w-[212px] text-center flex justify-center py-2 border-2 border-solid transition-all whitespace-nowrap
                                        ${selectedSession === session.value
                                                ? "bg-black text-white border-[#6D6E71]"
                                                : index === 0 && !selectedSession
                                                    ? "hovered-default bg-black text-white border-[#6D6E71]"
                                                    : "border-[#6D6E71] hover:bg-black hover:text-white"
                                            }`}
                                    >
                                        <p className="text-[14px] font-sans">{`${session.name} : ${session.time}`} </p>
                                    </Checkbox>
                                ))}
                            </div>
                        </Checkbox.Group>
                    </div>
                    {visibleTimelineSection === 1 && (
                        <div className='morning-timeline ml-[0px]
                        sm:ml-[15px] md:ml-[0px] lg:ml-[1rem] xl:ml-[4rem]' id='1'>
                            <div className='grid grid-rows-2 gap-y-2 md:gap-y-3 lg:gap-y-5 '>
                                <div className='section grid'>
                                    <div className='time'>8:00 - 9:20</div>
                                    <div className='content'>Check-in</div>
                                </div>

                                <div className='section grid'>
                                    <div className='time'>8:00 - 9:15</div>
                                    <div className='content'>Trải nghiệm - Tỏ Tường</div>
                                </div>

                                <div className='section grid'>
                                    <div className='time'>9:30 - 12:30</div>
                                    <div className='content'>Sự Kiện Chính</div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-2')}>Nguyễn Tuấn Khanh</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-4')}>Nguyễn Phan Thùy Dương</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'>Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-1')}>Phạm Hữu Hoàng</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'>Tiết mục trình diễn</div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'>Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-3')}>Dino Vũ</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'>Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-11')}>Hồ Thái Bình</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='ticket-container flex mt-4 mb-1 sm:mb-2'>
                                        <button
                                            className="ticket-button text-center lg:text-[35px] md:text-[25px] text-[22px] px-7 py-3 rounded-sm"
                                            onClick={handleOnClick}
                                        //disabled={true}
                                        >
                                            ĐĂNG KÍ VÉ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}

                    {visibleTimelineSection === 2 && (
                        <div className='afternoon-timeline ml-[0px]
                        sm:ml-[15px] md:ml-[0px] lg:ml-[1rem] xl:ml-[4rem]' id='2'>
                            <div className='grid grid-rows-2 gap-y-2 md:gap-y-3 lg:gap-y-5'>
                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'>14:00 - 15:20 &nbsp;</div>
                                    <div className='content'>Check-in</div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'>14:00 - 15:15 &nbsp;</div>
                                    <div className='content'>Trải nghiệm - Tỏ Tường</div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'>15:30 - 18:30 &nbsp;</div>
                                    <div className='content'>Sự Kiện Chính</div>
                                </div>
                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-8')}>An Phương</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-7')}>Phan Mỹ Linh</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'>Tiết mục trình diễn</div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-6')}>Nguyễn Phú Hậu</span>
                                    </div>

                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-10')}>Nguyễn Thị Hồng Nhung</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-13')}>Lương Dũng Nhân</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='speaker-content'> Diễn Giả &nbsp;
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-14')}>Đào Đức Thành</span>
                                    </div>
                                </div>

                                <div className='section grid'>
                                    <div className='time whitespace-nowrap'></div>
                                    <div className='ticket-container flex mt-4 mb-1 sm:mb-2'>
                                        <button
                                            className="ticket-button text-center lg:text-[35px] md:text-[25px] text-[22px] px-7 py-3 rounded-sm"
                                            onClick={handleOnClick}
                                        //disabled={true}
                                        >
                                            ĐĂNG KÍ VÉ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}


                </div>


                <div className='second-container flex h-auto items-center justify-center
                                mt-[20px] md:mt-[0px] lg:mt-[0px] xl:mt-[0px]'>
                    <div className='speaker-bg relative w-full h-full z-[2] flex justify-center'>
                        <img className='absolute pink' src='./assets/pattern/single-pattern/3-Pink.png' />
                        <img className='absolute green' src='./assets/pattern/single-pattern/4-Green.png' />
                        <img className='absolute yellow' src='./assets/pattern/single-pattern/1-Yellow.png' />
                        <img className='absolute blue' src='./assets/pattern/single-pattern/2-Blue.png' />
                        <div className='logo-detail relative flex flex-col z-[3] items-center justify-center'>
                            {activeSpeaker === 'speaker-0' && (
                                <>
                                    <div className='logo-container flex flex-col'>
                                        <div className='tedxlogo-image flex'>
                                            <img src='./assets/logo/to-tuong-logo/To-tuong-logo-black.png' alt='Logo Image' />
                                        </div>
                                        <div className='tedx-name flex '>
                                            <h2>Mở lòng với thực tại </h2>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className='speaker-detail relative flex flex-col z-[3] items-center justify-items-center justify-center '>

                            {activeSpeaker === 'speaker-1' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS PHH.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex '>
                                        <h2>Phạm Hữu Hoàng</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Chủ tịch UNICEF NextGen Việt Nam</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-2' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS NTK.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Nguyễn Tuấn Khanh</h2>
                                    </div>
                                    <div className='speaker-role flex flex-col'>
                                        <h4>Tiến sĩ, Giảng viên khoa QHQT</h4>
                                        <h3>Trường Đại học Khoa học Xã hội và Nhân văn</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-3' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS DV.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Dino Vũ</h2>
                                    </div>
                                    <div className='speaker-role flex flex-col'>
                                        <h4>Nhà sáng tạo nội dung </h4>
                                        <h3>Dinology - Ngòn Ngon by Dino</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-4' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS NPTD.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Nguyễn Phan Thùy Dương</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Chủ biên ELLE Decoration Việt Nam</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-6' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS NPH.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Nguyễn Phú Hậu</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Biên kịch & Đạo diễn</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-7' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS PML.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Phan Mỹ Linh</h2>
                                    </div>
                                    <div className='speaker-role flex flex-col'>
                                        <h4>Mẹ của Michelle Châu Anh Loreman</h4>
                                        <h3>Đồng sáng lập Liên đoàn Tranh biện Việt Nam</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-8' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS AP.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>An Phương</h2>
                                    </div>
                                    <div className='speaker-role flex flex-col'>
                                        <h4>Nhà báo & Nhà sáng tạo nội dung</h4>
                                        <h3>Letsplaymakeup</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-10' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS NTHN.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Nguyễn Thị Hồng Nhung</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Thành viên sáng lập Fusion One</h3>
                                    </div>
                                </>
                            )}
                            {activeSpeaker === 'speaker-11' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS HTB.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Hồ Thái Bình</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Giám đốc Survival Skills Vietnam</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-13' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS LDN.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Lương Dũng Nhân</h2>
                                    </div>
                                    <div className='speaker-role flex flex-col'>
                                        <h4>Nhà sáng lập, GĐ Đào tạo Hệ thống Giáo dục ATY</h4>
                                        <h3>Nhà sáng lập Dự án A.I. Mastermind</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-14' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS DDT.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Đào Đức Thành</h2>
                                    </div>
                                    <div className='speaker-role flex flex-col'>
                                        <h4>Đạo diễn & Giám đốc Sáng tạo</h4>
                                        <h3>Tomochi Production</h3>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpeakerSection;
