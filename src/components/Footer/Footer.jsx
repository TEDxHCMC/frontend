import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer class= "footer-bg">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class= "min-[1140px]:flex md:justify-between mb-20">
                    <div class="mb-6 min-[1140px]:md-10">
                        <a href="" class="flex items-center">
                            <img class="h-14 w-52"src="./src/assets/logo/to-tuong-logo/To-tuong-logo-white.png" alt="TEDX Logo"/>
                        </a>

                        <div class="flex items-center space-x-3 mt-3">
                            <a href="#" className="text-blue green p-1 rounded-lg">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="#00FFC3"/>
                                    <path d="M15.1386 21V14.6139H17.39L17.7271 12.1252H15.1385V10.5362C15.1385 9.81563 15.3486 9.32461 16.434 9.32461L17.8182 9.32399V7.09806C17.5788 7.06778 16.7571 7 15.8012 7C13.8054 7 12.439 8.1598 12.439 10.2898V12.1252H10.1818V14.6139H12.439V20.9999H15.1386V21Z" fill="#030EF5"/>
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>

                            <a href="#" className="text-blue green p-1 rounded-lg">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="#00FFC3"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C7 11.2038 7 9.80567 7.66632 8.79865C7.96386 8.34897 8.34897 7.96386 8.79865 7.66632C9.80567 7 11.2038 7 14 7C16.7962 7 18.1943 7 19.2013 7.66632C19.651 7.96386 20.0361 8.34897 20.3337 8.79865C21 9.80567 21 11.2038 21 14C21 16.7962 21 18.1943 20.3337 19.2013C20.0361 19.651 19.651 20.0361 19.2013 20.3337C18.1943 21 16.7962 21 14 21C11.2038 21 9.80567 21 8.79865 20.3337C8.34897 20.0361 7.96386 19.651 7.66632 19.2013C7 18.1943 7 16.7962 7 14ZM17.6239 14.0002C17.6239 16.0016 16.0013 17.6242 13.9999 17.6242C11.9984 17.6242 10.3759 16.0016 10.3759 14.0002C10.3759 11.9987 11.9984 10.3762 13.9999 10.3762C16.0013 10.3762 17.6239 11.9987 17.6239 14.0002ZM13.9999 16.3981C15.3242 16.3981 16.3978 15.3245 16.3978 14.0002C16.3978 12.6759 15.3242 11.6023 13.9999 11.6023C12.6756 11.6023 11.602 12.6759 11.602 14.0002C11.602 15.3245 12.6756 16.3981 13.9999 16.3981ZM17.767 11.0456C18.2373 11.0456 18.6185 10.6644 18.6185 10.1941C18.6185 9.72383 18.2373 9.34259 17.767 9.34259C17.2967 9.34259 16.9155 9.72383 16.9155 10.1941C16.9155 10.6644 17.2967 11.0456 17.767 11.0456Z" fill="#030EF5"/>
                                </svg>
                                <span class="sr-only">Instagram page</span>
                            </a>

                            <a href="#" className="text-blue green p-1 rounded-lg">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="#00FFC3"/>
                                    <path d="M7 8.88207C7 8.43313 7.15766 8.06276 7.47297 7.77096C7.78828 7.47915 8.1982 7.33325 8.7027 7.33325C9.1982 7.33325 9.59909 7.4769 9.90541 7.76423C10.2207 8.06052 10.3784 8.4466 10.3784 8.92248C10.3784 9.35345 10.2252 9.71259 9.91892 9.99992C9.60361 10.2962 9.18919 10.4444 8.67568 10.4444H8.66216C8.16666 10.4444 7.76577 10.2962 7.45946 9.99992C7.15315 9.70362 7 9.331 7 8.88207ZM7.17568 20.6666V11.67H10.1757V20.6666H7.17568ZM11.8378 20.6666H14.8378V15.643C14.8378 15.3288 14.8739 15.0863 14.9459 14.9157C15.0721 14.6105 15.2635 14.3523 15.5203 14.1413C15.777 13.9303 16.0991 13.8248 16.4865 13.8248C17.4955 13.8248 18 14.5027 18 15.8585V20.6666H21V15.5083C21 14.1795 20.6847 13.1716 20.0541 12.4848C19.4234 11.7979 18.5901 11.4545 17.5541 11.4545C16.3919 11.4545 15.4865 11.9528 14.8378 12.9494V12.9763H14.8243L14.8378 12.9494V11.67H11.8378C11.8559 11.9573 11.8649 12.8506 11.8649 14.3501C11.8649 15.8495 11.8559 17.955 11.8378 20.6666Z" fill="#030EF5"/>
                                </svg>
                                <span class="sr-only">Linkedin page</span>
                            </a>
                        </div>
                        
                    </div>
                    <div class="grid grid-cols-2 gap-10 sm:gap-6  sm:grid-cols-3 justify-items-center">
                        <div>
                            <h4 className="mb-6">LIÊN HỆ</h4>
                            <ul className="text-white space-y-3">
                                <li className="mb-4">
                                    Hỷ Tước Yến <br className="mb-2" />
                                    Yên Hoà, Cầu Giấy, Hà Nội
                                </li>
                                <li>
                                    0971122789 <br className="mb-2" />
                                    Thứ 2 - Chủ Nhật 9:00 - 18:00
                                </li>
                                <li>
                                    hytuoccompanylimited@gmail.com
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="mb-6">CHÍNH SÁCH</h4>
                            <ul class="text-white space-y-3">
                                <li class="mb-4">
                                    Chính sách bảo mật
                                </li>
                                <li>
                                    Chính sách vận chuyển
                                </li>
                                <li>
                                    Chính sách đổi trả
                                </li>
                                <li>
                                    Quy định sử dụng
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="mb-6">ĐĂNG KÍ ĐỂ NHẬN TIN</h4>
                                <ul class="text-white space-y-3">
                                    <li>
                                        Đăng kí nhận thông tin khuyến mãi
                                    </li>
                                    <li>
                                        <input 
                                            type="text"
                                            value="Email của bạn"
                                            style={{ borderBottom: '2px solid rgba(0, 255, 195, 1)' }}
                                            className="text-gray-500 h-11 align-middle justify-center" />
                                    </li>

                                    <li>
                                        <button className="green h-11 w-32 rounded-full">Đăng kí</button>
                                    </li>
                                </ul>
                        </div>
                
                    </div>
                    
                </div>

                <hr className="mt-4 border-green"/>
                
                <div className='text-white flex justify-center mt-5 text-base'>
                        Bản quyền thuộc về © Hỷ Tước Yến
                </div>
            </div>

            
            
        </footer>
    )
}

export default Footer
