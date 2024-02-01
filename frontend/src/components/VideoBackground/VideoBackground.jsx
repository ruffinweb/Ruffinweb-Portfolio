import * as React from 'react';
import spaceBackground from '/media/space1.mp4'
import spaceBackgroundInvert from '/media/space1-negate.mp4'


const VideoBackground = () => {
  return (

    <video autoPlay muted loop id="videoBackground">
      <source src={spaceBackground} type="video/mp4">
        </source>
    </video>
  );
};

export default VideoBackground;
