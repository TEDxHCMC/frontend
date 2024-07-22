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
            <div className="container footer pt-[8.125em] pb-[5.625em] mx-auto max-[991px]:px-12 max-[767px]:px-6 max-[479px]:pt-24 max-[479px]:pb-10">
                <div className="main-footer flex justify-between pb-20 gap-x-14 gap-y-14 max-[991px]:flex-col max-[991px]:justify-start max-[991px]:items-start">
                    <div className="footer-left ">
                        <Link to="" className="flex items-center">
                            <img class="h-14 w-52" src="./assets/logo/to-tuong-logo/To-tuong-logo-black.png" alt="TEDX Logo" />
                        </Link>

                        <div class="flex items-center space-x-3 mt-3">
                            <Link to="https://www.facebook.com/share/p4HgwXHXcuiwYhPU/?mibextid=LQQJ4d" className="facebook rounded-lg">
                                <svg width="38" height="38" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="rgb(255, 255, 255)" />
                                    <path d="M15.1386 21V14.6139H17.39L17.7271 12.1252H15.1385V10.5362C15.1385 9.81563 15.3486 9.32461 16.434 9.32461L17.8182 9.32399V7.09806C17.5788 7.06778 16.7571 7 15.8012 7C13.8054 7 12.439 8.1598 12.439 10.2898V12.1252H10.1818V14.6139H12.439V20.9999H15.1386V21Z" fill="rgba(236, 16, 20, 1)" />
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </Link>

                            <Link to="https://www.instagram.com/tedxhcmc?igsh=MTd0MmwybTlrNDIwbQ==" className="instagram rounded-lg">
                                <svg width="38" height="38" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="8" fill="rgb(255, 255, 255)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C7 11.2038 7 9.80567 7.66632 8.79865C7.96386 8.34897 8.34897 7.96386 8.79865 7.66632C9.80567 7 11.2038 7 14 7C16.7962 7 18.1943 7 19.2013 7.66632C19.651 7.96386 20.0361 8.34897 20.3337 8.79865C21 9.80567 21 11.2038 21 14C21 16.7962 21 18.1943 20.3337 19.2013C20.0361 19.651 19.651 20.0361 19.2013 20.3337C18.1943 21 16.7962 21 14 21C11.2038 21 9.80567 21 8.79865 20.3337C8.34897 20.0361 7.96386 19.651 7.66632 19.2013C7 18.1943 7 16.7962 7 14ZM17.6239 14.0002C17.6239 16.0016 16.0013 17.6242 13.9999 17.6242C11.9984 17.6242 10.3759 16.0016 10.3759 14.0002C10.3759 11.9987 11.9984 10.3762 13.9999 10.3762C16.0013 10.3762 17.6239 11.9987 17.6239 14.0002ZM13.9999 16.3981C15.3242 16.3981 16.3978 15.3245 16.3978 14.0002C16.3978 12.6759 15.3242 11.6023 13.9999 11.6023C12.6756 11.6023 11.602 12.6759 11.602 14.0002C11.602 15.3245 12.6756 16.3981 13.9999 16.3981ZM17.767 11.0456C18.2373 11.0456 18.6185 10.6644 18.6185 10.1941C18.6185 9.72383 18.2373 9.34259 17.767 9.34259C17.2967 9.34259 16.9155 9.72383 16.9155 10.1941C16.9155 10.6644 17.2967 11.0456 17.767 11.0456Z" fill="rgba(236, 16, 20, 1)" />
                                </svg>
                                <span class="sr-only">Instagram page</span>
                            </Link>
                        </div>
                    </div>

                    <div className="footer-email min-w-[28rem] mb-4">
                        <div className="heading-footer text-black text-[24px] font-bold tracking-[0.05em] mb-4">
                            <h2>Theo dõi để cập nhật thông tin</h2>
                        </div>
                        <div className="footer-form-wrapper mb-[1em] w-form">
                            <form
                                id="wf-form-Email-Form"
                                name="wf-form-Email-Form"
                                className="form-container"
                                aria-label="Email Form"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    className="footer-text-field relative z-[1] outline-none text-white bg-black border-0 py-[0.75rem] px-[1.5rem] font-light w-input"
                                    maxLength="256"
                                    name="Email"
                                    data-name="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    id="Email-3"
                                    required
                                />
                                <input
                                    type="submit"
                                    data-wait="Please wait..."
                                    className="form-footer-submit z-[2] bg-black text-white py-[0.75rem] px-[1.5rem] font-medium absolute top-0 bottom-0 right-0 w-button"
                                    value="Sign Up"
                                />
                            </form>
                            {status === 'success' && (
                                <div
                                    className="success-message bg-black py-[0.75rem] px-[1.5rem] text-white w-form-done"
                                    tabIndex="-1"
                                    role="region"
                                    aria-label="Email Form success"
                                >
                                    <div className="text-24px text-color-black footer">You're subscribed!</div>
                                </div>
                            )}
                            {status === 'failure' && (
                                <div
                                    className="w-form-fail mt-4 p-4"
                                    tabIndex="-1"
                                    role="region"
                                    aria-label="Email  Form failure"
                                >
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='sub-footer flex justify-center mt-5'>
                    <Link to="/" className="space-x-4">
                        <img
                            className="h-7 w-auto"
                            src="./assets/logo/TEDx-logo/TEDx-Black-Short.png"
                        />
                    </Link>
                </div>



            </div>
        </footer>
    )
}

export default Footer
