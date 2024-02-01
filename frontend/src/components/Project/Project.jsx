import * as React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import mythAppPreview from '/media/sample_preview.png'

const Project = ({ title, image, info, summary, previewUrl }) => {
  const singleProjectStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    alignItems: 'start',
    margin: '0 auto',
  };

  const projectTitleStyle = {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    gap: '250px',
    justifyContent: 'end',
    alignItems: 'center',
    maxWidth: '1600px',
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
      gap: '80px',
    },
  };

  const projectSummaryStyle = {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    gap: '250px',
    alignItems: 'start',
    maxWidth: '1600px',
    '@media (max-width: 1000px)': {
      flexDirection: 'column',
      gap: '80px',
    },
  };

  return (
    <Box sx={singleProjectStyle} className='single-project'>
      <Box sx={projectTitleStyle} className='project-title'>
        <Typography variant="h2" gutterBottom color='primary'>
          {title}
        </Typography>
        <Button variant="outlined" size="large" href={previewUrl} target="_blank">
          Live Preview
        </Button>
      </Box>

      <img
        className="project-preview-image"
        src={`/media/${image}`} // Assuming images are in the 'public/media/' directory
        alt={`Preview of ${title} application shown in mobile and desktop-sized devices.`}
      />

      <Box sx={projectSummaryStyle} className='project-summary'>
        <Typography variant="h4" gutterBottom color='primary'>
          {info.join(', ')}
        </Typography>
        <Typography variant="h4" gutterBottom color='primary'>
          {summary}
        </Typography>
      </Box>
    </Box>
  );
};

export default Project;
