
import React, { useState } from 'react';
import './speakersection.scss';

const SpeakerSection = () => {
    const [visibleSpeaker, setVisibleSpeaker] = useState(null);

    // Handlers to manage visibility of speaker details
    const handleClick = (id) => {
        setVisibleSpeaker(id);
        console.log(`Button clicked for speaker with ID: ${id}`);
    };

    const handleClose = () => {
        setVisibleSpeaker(null);
        console.log('Close button clicked');
    };

    return (
        <div>
            <div className='bg-content h-full'>
                <div className='speaker-heading flex flex-col items-center justify-center 
                                mt-[200px]'>
                    <h1 className='font-bold text-[65px]
                    sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[140px]'>
                        CÁC DIỄN GIẢ</h1>

                    <img
                        className="heading-logo mt-5 md:h-[48px] h-5 w-auto"
                        src="./assets/logo/TEDx-logo/TEDx-Black-Short.png"
                    />


                </div>
                <div className='speaker-container h-full flex items-center justify-center  m-[100px]'>
                    <div className='grid-speaker-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 xl:gap-x-22 xl:gap-y-14 '>
                        <div className='speaker speaker-1' id='speaker-1'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>PHẠM</h2>
                                    <h2>HỮU HOÀNG</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Chủ tịch UNICEF NextGen Việt Nam</h3>
                                    <h4>Người xây dựng cộng đồng và thương hiệu, đồng thời là nhà chiến lược doanh nghiệp với hơn 14 năm kinh nghiệm làm việc với một số công ty đa quốc gia lớn nhất thế giới về các thương hiệu giá trị nhất của họ...</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button onClick={() => handleClick(1)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64813L12.9995 9.90739L8.74023 14.3518" stroke="#EC1014" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                            </div>
                            <div className='image-container mt-5 flex justify-end'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS PHH.png' />
                            </div>

                        </div>

                        <div className='speaker speaker-2' id='2'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>THIỀU</h2>
                                    <h2>THANH HÀ</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Đại diện Vietsuccess & GEEK Up <br />
                                        Đối tác quản lý N.H & Partners</h3>
                                    <h4>Một chuyên gia đầy nhiệt huyết và có nhiều năm kinh nghiệm trong lĩnh vực phát triển kinh doanh, quan hệ đối tác và truyền thông.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="#6D6E71" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#FFFBF6" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-center'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS TTH.png' />
                            </div>



                        </div>

                        <div className='speaker speaker-3' id='3'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>NGUYỄN</h2>
                                    <h2>TUẤN KHANH</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Tiến sĩ & Giảng viên khoa QHQT Đại học Khoa học Xã hội và Nhân văn</h3>
                                    <h4>Giảng viên Khoa QHQT, trường ĐH KHXH&NV-ĐHQG TP. HCM, Giảng viên Viện nghiên cứu quốc tế và Chính sách công, ĐH Hoàng gia Phnompenh</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#030EF4" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                            </div>

                            <div className='image-container mt-5 flex justify-start'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS NTK.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-4' id='4'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>JOYCELYN</h2>
                                    <h2>TRAN</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Thành viên hội đồng quản trị Pacific Links Foundation</h3>
                                    <h4>Một chuyên gia tư vấn quản lý chuỗi cung ứng dày dặn kinh nghiệm với hơn hai thập kỷ trong lĩnh vực tìm nguồn cung ứng và mua sắm sản phẩm toàn cầu.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64813L12.9995 9.90739L8.74023 14.3518" stroke="#EC1014" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-start'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS NTK.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-5' id='5'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>DINO VŨ</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Nhà sáng tạo nội dung <br /> Dinology - Ngòn Ngon by Dino</h3>
                                    <h4>Một chuyên gia đầy nhiệt huyết và có nhiều năm kinh nghiệm trong lĩnh vực phát triển kinh doanh, quan hệ đối tác và truyền thông.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="#6D6E71" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#FFFBF6" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-center'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS DV.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-6' id='6'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>NGUYỄN PHAN</h2>
                                    <h2>THUỲ DƯƠNG</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Tổng biên tập Tạp chí ELLE Decoration Việt Nam</h3>
                                    <h4>...</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#030EF4" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-end'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS NPTD.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-7' id='7'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>NGUYỄN</h2>
                                    <h2>PHÚ HẬU</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Biên kịch & Đạo diễn</h3>
                                    <h4>Chuyên môn của anh bao gồm biên kịch, đạo diễn, nhà sản xuất, nhà đầu tư điện ảnh.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64813L12.9995 9.90739L8.74023 14.3518" stroke="#EC1014" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-start'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS NPH.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-8' id='8'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>AN PHƯƠNG</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Nhà báo & Nhà sáng tạo nội dung <br /> Letsplaymakeup</h3>
                                    <h4>Là một nhà báo và một nhà sáng tạo nội dung đa nền tảng với hơn 7 năm kinh nghiệm trong lĩnh vực Beauty and Lifestyle.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="#6D6E71" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#FFFBF6" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-center'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS AP.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-9' id='9'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>PHAN</h2>
                                    <h2>MỸ LINH</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Mẹ của Michelle Chau Anh Loreman <br />Nhà sáng lập Vietnam Debate Association</h3>
                                    <h4>Là Mẹ, Nhà sáng lập và là Nguyên Hiệu trưởng trường THCS, THPT True North. Năm 2019, cô được Liên Hợp Quốc công nhận là "Nhà giáo xuất sắc" vì những đóng góp của mình cho Mục tiêu Phát triển Bền vững trong Giáo dục.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#030EF4" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-end'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS PML.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-10' id='10'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>PHƯƠNG VŨ</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Đạo diễn & Giám đốc Sáng tạo <br /> Antiantiart</h3>
                                    <h4>...</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64813L12.9995 9.90739L8.74023 14.3518" stroke="#EC1014" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-start'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS Phương Vũ.png' />
                            </div>
                        </div>

                        <div className='speaker speaker-11' id='11'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>NGUYỄN THỊ</h2>
                                    <h2>HỒNG NHUNG</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Thành viên sáng lập Fusion One</h3>
                                    <h4>Một trong những chuyên gia tư vấn về Insight Người Tiêu Dùng - chuyên sâu Nghiên cứu định tính được săn đón bậc nhất tại Việt Nam.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="#6D6E71" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#FFFBF6" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-center'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS NTHN.png' />
                            </div>

                        </div>

                        <div className='speaker speaker-12' id='12'>
                            <div className='speaker-content mt-7 mx-5'>
                                <div className='speaker-name mb-4'>
                                    <h2>HỒ</h2>
                                    <h2>THÁI BÌNH</h2>
                                </div>
                                <div className='speaker-detail'>
                                    <h3 className='mb-4'>Giám đốc Survival Skills Vietnam</h3>
                                    <h4>Hành trình của anh bắt đầu từ khi tham gia khóa học Sơ Cấp Cứu  của tổ chức. Với niềm đam mê mãnh liệt, anh phát triển một ứng dụng giúp mọi người nhanh chóng tiếp cận các hướng dẫn cứu sinh trong trường hợp khẩn cấp.</h4>
                                </div>
                            </div>

                            <div className='button-detail mt-4 flex justify-center'>
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="20" rx="10" fill="white" />
                                        <path d="M8.74023 5.64819L12.9995 9.90745L8.74023 14.3519" stroke="#030EF4" stroke-width="1.11111" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className='image-container mt-5 flex justify-end'>
                                <img className='speaker-image'
                                    src='./assets/speaker/speaker_GS HTB.png' />
                            </div>
                        </div>

                    </div>

                    {visibleSpeaker === 1 && (
                        <div className='speaker-detail-view speaker-1'>
                            <div className='close-button'>
                                <button onClick={handleClose}>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(180 40 40)" fill="white" />
                                        <path d="M22.5195 28.7037L14.001 20.1852L22.5195 11.2963" stroke="#EC1014" strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className='main-content'>
                                <div className='speaker-info'>
                                <div className='speaker-img'>
                                    <img className=''
                                        src='./assets/speaker/speaker_GS PHH.png' />
                                </div>
                                <div className='speaker-name-detail'>
                                    <h2>PHẠM <br/>HỮU HOÀNG</h2>
                                </div> 
                                </div>
                                
                                <div className='speaker-content'>
                                    <h3>Chủ tịch UNICEF NextGen Việt Nam</h3>
                                    <p>Người xây dựng cộng đồng và thương hiệu, đồng thời là nhà chiến lược doanh nghiệp với hơn 14 năm kinh nghiệm làm việc với một số công ty đa quốc gia lớn nhất thế giới về các thương hiệu giá trị nhất của họ...</p>
                                </div>

                                <div className='line'></div>

                                <div className='speaker-story'>
                                    <h4>Điểm chung trong câu chuyện thành công: “vốn xã hội"</h4>
                                    <p>Hoàng đam mê tạo ra các cộng đồng với mục đích nhằm thúc đẩy kết nối giữa con người với con người và tạo điều kiện chuyển giao kiến ​​thức. Công việc của anh đã mang lại cho anh cơ hội được giao lưu, kết bạn và học hỏi từ một số nhà lãnh đạo có ảnh hưởng nhất trong nhiều ngành và lĩnh vực khác nhau ở Việt Nam và khu vực. Thông qua những tương tác này, anh ấy đã xác định được điểm chung trong câu chuyện thành công của họ: “vốn xã hội”. Khái niệm này đề cập đến các mối quan hệ và mạng lưới mà các cá nhân hoặc doanh nghiệp sở hữu, cho phép họ tiếp cận các nguồn lực, quan hệ đối tác và hỗ trợ từ những người khác. Hoàng tận tình giải thích tầm quan trọng của việc xây dựng vốn xã hội trong thế giới ngày nay và cách tận dụng nó có thể dẫn đến một cuộc sống thành công và trọn vẹn.</p>
                                    <p>Với hơn 14 năm kinh nghiệm quản lý khối thương mại năng động, anh Phạm Hữu Hoàng đã thành thạo điều hướng các bối cảnh phức tạp trong việc quản lý B2B2C ở nhiều lĩnh vực khác nhau bao gồm FMCG, Bán lẻ, Giáo dục và tổ chức chuyên môn của Liên Hợp Quốc. Trong suốt hành trình của mình, anh đã phát triển thành công nhiều thương hiệu khác nhau, trau dồi chuyên môn của mình trong quản lý thương mại và quan hệ đối tác kinh doanh, cụ thể là quản lý thương hiệu và tiếp thị, chiến lược thâm nhập thị trường, chiến lược phân phối, lộ trình đến thị trường và quan hệ đối tác kinh doanh. Anh có thế mạnh trong việc nuôi dưỡng các mối quan hệ cộng đồng để phát triển lâu dài, đặc biệt là với các nhà lãnh đạo thông qua các phương pháp tiếp cận đổi mới, giúp góp phần trực tiếp vào sự phát triển của doanh nghiệp. Ngoài ra, anh Hoàng còn xuất sắc trong việc lãnh đạo các nhóm đa văn hóa trong môi trường phát triển nhanh và đa dạng.  Bên cạnh đó, xuất phát từ niềm đam mê sâu sắc trong việc tạo ra tác động tích cực trên thế giới thông qua công việc và hoạt động tình nguyện của mình, anh Hoàng còn đóng vai trò là Chủ tịch của UNICEF NextGen Việt Nam tại trường Đại học RMIT Việt Nam. Đây là một mạng lưới các chuyên gia trẻ hỗ trợ sứ mệnh của UNICEF vì trẻ em và anh cam kết gây quỹ và xây dựng nguồn lực quan trọng, cũng như đóng góp khả năng lãnh đạo của mình cho UNICEF. Ngoài ra, anh còn là người thích học hỏi những điều mới và mở rộng tầm nhìn của mình. Anh có bằng Thạc sĩ Tiếp thị tại trường Đại học New South Wales và tích lũy nhiều chứng chỉ về tiếp thị thương hiệu tích hợp và ra mắt sản phẩm.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpeakerSection;
