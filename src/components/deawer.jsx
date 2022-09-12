import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-scroll";
import Language from '../components/LanguageButton'
export default function TemporaryDrawer({setContect,fun,language}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
 <h3  className="mt-4 text-center" >Menu</h3>
<ul style={{ listStyle: "none", marginTop: "0px" }}>
  <li
    className="mt-4"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      textDecoration: "none",
    }}
  >
    <Link>What i do</Link>
  </li>
  <li
    className="mt-4"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      textDecoration: "none",
    }}
  >
    <Link to="clients" spy={true} smooth={true} offset={50} duration={50}>
      clients
    </Link>
  </li>
  <li
    className="mt-4"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      textDecoration: "none",
    }}
  >
    <Link to="About" spy={true} smooth={true} offset={50} duration={50}>
    About
    </Link>
  </li>
  <li
    className="mt-4"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      textDecoration: "none",
    }}
  >
    <Link to="Work" spy={true} smooth={true} offset={50} duration={50}>
      Work examples
    </Link>
  </li>
  <li
    className="mt-4"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      textDecoration: "none",
    }}
  >
    <Link to="Contact" spy={true} smooth={true} offset={50} duration={50}>
      Contact
    </Link>
  </li>
</ul> 
<Language setContect={setContect} fun={(data)=>fun(data)}/>

    </Box>
  );

  return (
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-6 h-6"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
/>
</svg> 
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}






