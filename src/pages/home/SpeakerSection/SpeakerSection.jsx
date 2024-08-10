
import React, { useState } from 'react';
import './speakersection.scss';

const SpeakerSection = () => {
    const [visibleTimelineSection, setVisibleTimelineSection] = useState(1);
    const [activeSpeaker, setActiveSpeaker] = useState('speaker-1');

    const handleClick = (id) => {
        console.log(`Button clicked: ${id}`);
        setVisibleTimelineSection(id);
    };
    

    const handleSpeakerClick = (speakerId) => {
        setActiveSpeaker(speakerId);
        console.log('Button is clicked');
    };

    return (
        <div>
            <div className='background-speaker p-4
                sm:m-8 md:m-12 lg:m-16 xl:m-24'>
                <div className='speaker-heading'>
                    <h1>Lorem ipsum</h1>
                    <div className='tedx-section flex flex-col sm:flex-row
                    gap-x-2 sm:gap-x-4
                    gap-y-2 sm:gap-y-0
                    mb-[8px] sm:mb-[1rem] xl:mb-[2rem]'>
                        <button onClick={() => handleClick(1)}>
                            <div className='morning-section flex'>
                            Sáng: 9:00 - 12:00
                        </div>
                        </button>
                        <button onClick={() => handleClick(2)}>
                        <div className='afternoon-section flex'>
                            Chiều: 13:00 - 16:00
                        </div>
                        </button>
                    </div>
                    {visibleTimelineSection === 1 && (
                        <div className='morning-timeline ml-[8px]
                        sm:ml-[1rem] md:ml-[2rem] lg:ml-[3rem] xl:ml-[4rem]' id='1'>
                            <div className='grid grid-rows-2 gap-y-2 md:gap-y-3 lg:gap-y-5 '>
                                <div className='section section-1 grid'>
                                    <div className='time'>7:00</div>
                                    <div className='content'>Giới thiệu chương trình</div>

                                </div>

                                <div className='section section-2 grid'>
                                    <div className='time'>8:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-1')}>Phạm Hữu Hoàng</span>
                                    </div>
                                </div>

                                <div className='section section-3 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-2')}>Nguyễn Tuấn Khanh</span>

                                    </div>
                                </div>

                                <div className='section section-4 grid'>
                                    <div className='time'>10:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-3')}>Dino Vũ</span>
                                    </div>
                                </div>

                                <div className='section section-5 grid'>
                                    <div className='time'>11:00</div>
                                    <div className='content'>Lorem ipsum dolor sit, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-4')}>Nguyễn Phan Thùy Dương</span>
                                    </div>
                                </div>

                                <div className='section section-6 grid'>
                                    <div className='time'>12:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-5')}>Thiều Thanh Hà</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {visibleTimelineSection === 2 && (
                        <div className='afternoon-timeline ml-[8px]
                        sm:ml-[1rem] md:ml-[2rem] lg:ml-[3rem] xl:ml-[4rem]' id='2'>
                            <div className='grid grid-rows-2 gap-y-2 md:gap-y-3 lg:gap-y-5'>
                                <div className='section section-7 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-6')}>Nguyễn Phú Hậu</span>
                                    </div>

                                </div>

                                <div className='section section-8 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-7')}>Phan Mỹ Linh</span>
                                    </div>
                                </div>

                                <div className='section section-9 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-8')}>An Phương</span>
                                    </div>
                                </div>

                                <div className='section section-10 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-9')}>Phương Vũ</span>
                                    </div>
                                </div>

                                <div className='section section-11 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-10')}>Nguyễn Thị Hồng Nhung</span>
                                    </div>
                                </div>

                                <div className='section section-12 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Lorem ipsum dolor sit amet, 
                                        <span className='speaker-click underline underline-offset-4' onClick={() => handleSpeakerClick('speaker-11')}>Hồ Thái Bình</span>
                                    </div>
                                </div>

                                <div className='section section-13 grid'>
                                    <div className='time'>9:00</div>
                                    <div className='content'>Kết thúc chương trình</div>
                                </div>
                            </div>
                        </div>


                    )}
                </div>


                <div className='second-container flex
                                ml-[0px] md:ml-[20px] lg:ml-[30px] xl:ml-[50px]
                                mt-[20px] md:mt-[0px] lg:mt-[0px] xl:mt-[0px]'>
                    <div className='speaker-bg relative'>
                        <img className='absolute pink' src='./assets/pattern/single-pattern/3-Pink.png' />
                        <img className='absolute green' src='./assets/pattern/single-pattern/4-Green.png' />
                        <img className='absolute yellow' src='./assets/pattern/single-pattern/1-Yellow.png' />
                        <img className='absolute blue' src='./assets/pattern/single-pattern/2-Blue.png' />
                        <div className='speaker-detail flex flex-col '>
                            {activeSpeaker === 'speaker-1' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS PHH.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
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
                                    <div className='speaker-role flex'>
                                        <h3>Tiến sĩ & Giảng viên khoa QHQT <br/> Đại học Khoa học Xã hội và Nhân văn</h3>
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
                                    <div className='speaker-role flex'>
                                        <h3>Nhà sáng tạo nội dung <br /> Dinology - Ngòn Ngon by Dino</h3>
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
                                        <h3>Tổng biên tập Tạp chí ELLE Decoration Việt Nam</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-5' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS TTH.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Thiều Thanh Hà</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Đại diện Vietsuccess & GEEK Up <br />
                                        Đối tác quản lý N.H & Partners</h3>
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
                                    <div className='speaker-role flex'>
                                        <h3>Mẹ của Michelle Chau Anh Loreman <br />Nhà sáng lập Vietnam Debate Association</h3>
                                    </div>
                                </>
                            )}

                            {activeSpeaker === 'speaker-8' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS AP.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>An Phươngg</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Nhà báo & Nhà sáng tạo nội dung <br /> Letsplaymakeup</h3>
                                    </div>
                                </>
                            )}
                            {activeSpeaker === 'speaker-9' && (
                                <>
                                    <div className='speaker-image flex'>
                                        <img src='./assets/speaker/speaker_GS Phương Vũ.png' alt='Speaker Image' style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <div className='speaker-name flex'>
                                        <h2>Phương Vũ</h2>
                                    </div>
                                    <div className='speaker-role flex'>
                                        <h3>Đạo diễn & Giám đốc Sáng tạo Antiantiart</h3>
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpeakerSection;
