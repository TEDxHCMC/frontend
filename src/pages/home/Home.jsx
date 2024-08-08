import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection'
import SpeakerSection from './SpeakerSection/SpeakerSection';
import DraftSpeakerSection from './DraftSpeaker/DraftSpeakerSection';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <FirstSection/>
            <SecondSection/>
            <SpeakerSection/>
            <DraftSpeakerSection/>

            
        </div>
    );
};

export default Home;
