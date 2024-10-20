import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection'
import SpeakerSection from './SpeakerSection/SpeakerSection';
import SponsorSection from './SponsorSection';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <FirstSection/>
            <SecondSection/>  
            <SpeakerSection/>  
            <SponsorSection/>      
        </div>
    );
};

export default Home;
