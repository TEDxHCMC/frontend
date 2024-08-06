import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection'
import SpeakerSection from './SpeakerSection/SpeakerSection';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            {/* <FirstSection/> */}
            <SecondSection/>
            <SpeakerSection/>

            
        </div>
    );
};

export default Home;
