import * as React from 'react';
import Box from '@mui/material/Box';
import Project from "../../components/Project/Project.jsx";
import Typography from "@mui/material/Typography";
import ProjectsArray from "../../utils/ProjectsArray.jsx";
import {forwardRef} from "react";

const ProjectsCard = forwardRef((props, ref) => {
  const projectsCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '50px',
    alignItems: 'start',
    maxWidth: '1600px',
    margin: '0 auto',
    '@media (max-width: 1000px)': {
      gap: '80px',
    },
  };

  const projectsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '200px',
  };

  return (
    <Box sx={projectsCardStyle} className='full-page-card' id='projectsCard' ref={ref}>
      <Typography variant="h5" gutterBottom color='primary'>
        My projects
      </Typography>

      <Box sx={projectsContainerStyle}>
        { ProjectsArray.map((project, index) => (
          <Project key={index} {...project}/>
        ))}
      </Box>
    </Box>
  );
});

export default ProjectsCard;
