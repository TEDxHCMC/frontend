import React from 'react'

const SponsorSection = () => {
    return (
        <div className="flex flex-wrap justify-center items-center bg-[#FFFBF6]
        h-auto p-6 mt-5">
            <div className="m-4 sm:m-6 md:m-8">
                <img src="./assets/external_logo/NextGen.png" alt="NextGen Logo"
                    className="h-[8vw] sm:h-[6vw] md:h-[4vw] lg:h-[3vw] w-auto" />
            </div>
            <div className="m-4 sm:m-6 md:m-8">
                <img src="./assets/external_logo/Carnival.png" alt="Carnival Logo"
                    className="h-[8vw] sm:h-[6vw] md:h-[4vw] lg:h-[3vw] w-auto" />
            </div>
            <div className="m-4 sm:m-6 md:m-8">
                <img src="./assets/external_logo/La Artisan.png" alt="La Artisan Logo"
                    className="h-[6vw] sm:h-[6vw] md:h-[4vw] lg:h-[3vw] w-auto" />
            </div>
            <div className="m-4 sm:m-6 md:m-8">
                <img src="./assets/external_logo/mehem.png" alt="Mehem Logo"
                    className="h-[8vw] sm:h-[6vw] md:h-[4vw] lg:h-[3vw] w-auto" />
            </div>
            {/*<div className="m-4 sm:m-6 md:m-8">
                <img src="./assets/external_logo/mehem.png" alt="AnNam Logo"
                    className="h-[8vw] sm:h-[6vw] md:h-[4vw] lg:h-[3vw] w-auto" />
            </div> */}
        </div>
    )
}

export default SponsorSection
