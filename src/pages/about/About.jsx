import React from 'react';
import Video from './Video/Video';
import Introduction from './Introduction/Introduction';
import BoxTedx from './BoxTedx/BoxTedx';
import GroupImages from './GroupImages/GroupImages';

const About = () => {
  return (
    <div className="">
        <Video />
        <Introduction />
        <BoxTedx />
        <GroupImages />
    </div>
  );
};

export default About;
