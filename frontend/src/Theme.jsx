import {createTheme} from "@mui/material/styles";

const RuffinWebTheme = createTheme({
  typography: {
    // primary: {
    //   main: '#ffffff',
    //   // main: '#FF0000',
    //
    // },
    // secondary: {
    //   main: '#000000',
    //   // main: '#0000FF',
    //
    // },
    mobile: {
      fontSize: '4rem',
      color: 'red',
    },
    h3: undefined,
  },
  palette: {

    // Swap these to toggle dark and light text
    primary: {
      // main: '#ffffff',
      main: '#000000',
      // main: '#FF0000',
    },
    secondary: {
      // main: '#000000',
      main: '#ffffff',
    },
    active: {
      main: '#088F8F',
    },
    // Swap these to toggle dark and light backgrounds
    background: {
      // default: '#000000',
      default: '#ffffff',
    },
    text: {
      primary: '#ffffff',
    },
    action: {
      active: '#ffffff',
    },
    outline: {
      active: '#088F8F',
      inactive: '#ffffff',

    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#000fff',
          color: theme => theme.palette.text.primary,
        },
        '&.Mui-focused $notchedOutline': {
          borderColor: theme => theme.palette.active.main,
        },
      },
    },


    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'inherit',
        }
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'inherit',
        }
      },
    },
  },
});

export default RuffinWebTheme;