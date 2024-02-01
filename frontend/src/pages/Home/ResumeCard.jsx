
import React, { forwardRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Route} from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NotesIcon from '@mui/icons-material/Notes';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonIcon from '@mui/icons-material/Person';


const ResumeCard = forwardRef((props, ref) => {
    return (
    <Box className="full-page-card" ref={ref}>
      <Typography variant="h1" gutterBottom sx={{ mb:'500px'}} color='primary'>
        Resume
      </Typography>
    </Box>
  );
});

export default ResumeCard;