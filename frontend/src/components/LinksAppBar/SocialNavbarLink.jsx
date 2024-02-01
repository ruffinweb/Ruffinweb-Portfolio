import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {useTheme} from "@mui/material";

function SocialNavbarLink({ href, onClick, text }) {
  const theme = useTheme();
  const [buttonColor, setButtonColor] = useState(theme.palette.primary.main);

  useEffect(() => {
    const handleResize = () => {
      // Adjust color based on screen size
      const newColor =
        theme.breakpoints.values.md <= window.innerWidth
          ? theme.palette.primary.main
          : theme.palette.secondary.main;
      setButtonColor(newColor);

    };

    handleResize(); // Set initial color

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.breakpoints.values.md, theme.palette.primary]);

  return (
    <Button target="_blank" href={href} onClick={onClick} sx={{ color: buttonColor, display: 'block' }}>
      {text}
    </Button>
  );
}

export default SocialNavbarLink
