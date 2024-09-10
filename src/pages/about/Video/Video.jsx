import React from 'react';
import './video.scss';

const Video = ({ videoId }) => {
    return (
        <div className="video-container flex justify-center items-center text-white md:h-[902px] sm:h-[750px] h-[600px] bg-black">
            {videoId ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                ></iframe>
            ) : (
                <p>Coming soon...</p>
            )}
        </div>
    );
};

export default Video;
