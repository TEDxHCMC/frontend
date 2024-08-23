import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './footer.scss'

const Footer = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('Email');

        try {
            // Make API request to subscribe email
            // Replace with your actual API endpoint
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('failure');
            }
        } catch (error) {
            setStatus('failure');
        }
    };
    return (

        <footer className="footer-section bg-[#f6f6f6]">
            <div className="container footer pt-[4em] pb-[3em] mx-auto max-[991px]:px-12 max-[767px]:px-6 max-[479px]:pt-24 max-[479px]:pb-10">
                <div className="main-footer flex justify-center pb-12 gap-x-14 gap-y-14 max-[991px]:flex-col max-[991px]:justify-center max-[991px]:items-center">
                    <div className="footer-left ">
                        <Link to="" className="flex items-center">
                            <img className="h-14 w-52" src="./assets/logo/to-tuong-logo/To-tuong-logo-black.png" alt="TEDX Logo" />
                        </Link>

                        <div className="flex items-center justify-center space-x-3 mt-3">
                            <Link to="https://www.facebook.com/share/p4HgwXHXcuiwYhPU/?mibextid=LQQJ4d" className="facebook rounded-lg">
                                <svg width="38" height="38" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="rgb(255, 255, 255)" />
                                    <path d="M15.1386 21V14.6139H17.39L17.7271 12.1252H15.1385V10.5362C15.1385 9.81563 15.3486 9.32461 16.434 9.32461L17.8182 9.32399V7.09806C17.5788 7.06778 16.7571 7 15.8012 7C13.8054 7 12.439 8.1598 12.439 10.2898V12.1252H10.1818V14.6139H12.439V20.9999H15.1386V21Z" fill="rgba(236, 16, 20, 1)" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </Link>

                            <Link to="https://www.instagram.com/tedxhcmc?igsh=MTd0MmwybTlrNDIwbQ==" className="instagram rounded-lg">
                                <svg width="38" height="38" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="rgb(255, 255, 255)" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 14C7 11.2038 7 9.80567 7.66632 8.79865C7.96386 8.34897 8.34897 7.96386 8.79865 7.66632C9.80567 7 11.2038 7 14 7C16.7962 7 18.1943 7 19.2013 7.66632C19.651 7.96386 20.0361 8.34897 20.3337 8.79865C21 9.80567 21 11.2038 21 14C21 16.7962 21 18.1943 20.3337 19.2013C20.0361 19.651 19.651 20.0361 19.2013 20.3337C18.1943 21 16.7962 21 14 21C11.2038 21 9.80567 21 8.79865 20.3337C8.34897 20.0361 7.96386 19.651 7.66632 19.2013C7 18.1943 7 16.7962 7 14ZM17.6239 14.0002C17.6239 16.0016 16.0013 17.6242 13.9999 17.6242C11.9984 17.6242 10.3759 16.0016 10.3759 14.0002C10.3759 11.9987 11.9984 10.3762 13.9999 10.3762C16.0013 10.3762 17.6239 11.9987 17.6239 14.0002ZM13.9999 16.3981C15.3242 16.3981 16.3978 15.3245 16.3978 14.0002C16.3978 12.6759 15.3242 11.6023 13.9999 11.6023C12.6756 11.6023 11.602 12.6759 11.602 14.0002C11.602 15.3245 12.6756 16.3981 13.9999 16.3981ZM17.767 11.0456C18.2373 11.0456 18.6185 10.6644 18.6185 10.1941C18.6185 9.72383 18.2373 9.34259 17.767 9.34259C17.2967 9.34259 16.9155 9.72383 16.9155 10.1941C16.9155 10.6644 17.2967 11.0456 17.767 11.0456Z" fill="rgba(236, 16, 20, 1)" />
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </Link>

                            <Link to="mailto:tedxhochiminhcity@gmail.com" className="gmail rounded-lg">
                                <svg width="38" height="38" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="rgb(255, 255, 255)" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 14.26L22.5 9H5.5L14 14.26ZM5.5 19V11.5L14 17L22.5 11.5V19H5.5Z" fill="rgba(236, 16, 20, 1)" />
                                </svg>
                                <span className="sr-only">Gmail</span>
                            </Link>
                            
                        </div>
                    </div>

                </div>

                <div className='sub-footer flex flex-col items-center justify-center pt-[3em]'>
                    <Link to="/" className="space-x-4">
                        <img
                            className="h-7 w-auto"
                            src="./assets/logo/TEDx-logo/TEDx-Black-Short.png"
                        />
                    </Link>
                    <h2 className='mt-5'>Copyrights © 2024 TedxHoChiMinhCity</h2>
                </div>



            </div>
        </footer>
    )
}

export default Footer
