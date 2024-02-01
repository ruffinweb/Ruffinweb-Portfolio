import * as React from 'react';
import {useRef} from "react";
import Box from '@mui/material/Box';
import TitleCard from "./TitleCard.jsx";
import AboutCard from "./AboutCard.jsx";
import ResumeCard from "./ResumeCard.jsx";
import ProjectsCard from "./ProjectsCard.jsx";
import ContactCard from "./ContactCard.jsx";
import LinksAppBar from "../../components/LinksAppBar/LinksAppBar.jsx";
import VideoBackground from "../../components/VideoBackground/VideoBackground.jsx";


const Home = () => {
const titleRef = useRef(null);
const aboutRef = useRef(null);
const projectsRef = useRef(null);
const resumeRef = useRef(null);
const contactRef = useRef(null);
  return (
      <Box>
        {/*<VideoBackground />*/}
        <LinksAppBar
            titleRef={titleRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            resumeRef={resumeRef}
            contactRef={contactRef}
        />
        <Box className='home-page'>
          <TitleCard ref={titleRef}/>
          <AboutCard ref={aboutRef} />
          <ProjectsCard ref={projectsRef} />
          <ResumeCard ref={resumeRef} />
          <ContactCard ref={contactRef} />
        </Box>
      </Box>
  );
};

export default Home;
