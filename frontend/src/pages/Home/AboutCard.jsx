import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Bullet from "../../components/Bullet/Bullet.jsx";
import { forwardRef } from "react";
import SkillsArray from "../../utils/SkillsArray.jsx";
import ExperienceArray from "../../utils/ExperienceArray.jsx";
import AboutArray from "../../utils/AboutArray.jsx";

const AboutCard = forwardRef((props, ref) => {
  const aboutCardStyle = {
    flexDirection: 'row',
    flex: 1,
    gap: '250px',
    alignItems: 'start',
    maxWidth: '1600px',
    margin: '0 auto',
    // backgroundColor: 'black',
    backgroundColor: theme => theme.palette.text.secondary,
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
      gap: '80px',
    },
  };

  const textSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    flex: 1,
    gap: '40px',
    textAlign: 'start',
  };

  const skillsSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    flex: 1,
    gap: '50px',
    textAlign: 'start',
  };

  return (
    <Box sx={aboutCardStyle} className='full-page-card' id='aboutCard' ref={ref}>
      <Box sx={textSectionStyle}>
        <Typography variant="h5" gutterBottom color='secondary'>
          About Me
        </Typography>

        {AboutArray.map((text, index) => (
          <Typography key={index} variant="h4" gutterBottom color='primary'>
            {text}
          </Typography>
        ))}
      </Box>

      <Box sx={skillsSectionStyle}>
        <Typography variant="h5" gutterBottom color='primary'>
          Tools and Technology
        </Typography>

        <Typography variant="h4" gutterBottom color='primary'>
          {SkillsArray.map((skill, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Bullet />}
              {skill}
            </React.Fragment>
          ))}
        </Typography>

        <Typography variant="h5" gutterBottom color='primary'>
          Experience
        </Typography>

        {ExperienceArray.map((experience, index) => (
          <Typography key={index} variant="h4" gutterBottom color='primary'>
            {experience.company}
            <br />
            {experience.date}
            <br />
            {experience.position}
          </Typography>
        ))}
      </Box>
    </Box>
  );
});

export default AboutCard;
