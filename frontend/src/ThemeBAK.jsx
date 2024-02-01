import { createTheme } from '@mui/material/styles';
import { purple, red } from "@mui/material/colors";

const RuffinWebTheme = createTheme({
  typography: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    mobile: {
      fontSize: '4rem',
      color: 'red',
    },
    h3: undefined,
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    active: {
      main: '#088F8F',
    },
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
    action: {
      active: '#ffffff',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#ffffff', // Set the outline color when not selected
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#ffffff', // Set the outline color on hover
        },
        '&$focused $notchedOutline': {
          borderColor: '#088F8F', // Set the outline color when focused
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Set the outline color when not selected
        }
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Set the outline color when not selected
        }
      },
    },
  },
});

export default RuffinWebTheme;
