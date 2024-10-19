import React from 'react';
import Video from './Video/Video';
import Introduction from './Introduction/Introduction';
import BoxTedx from './BoxTedx/BoxTedx';
import GroupImages from './GroupImages/GroupImages';

const About = () => {
  return (
    <main className="about">
        <Video videoId="OIR1hC4inEA"/>
        <Introduction />
        <BoxTedx />
        <GroupImages />
    </main>
  );
};

export default About;
