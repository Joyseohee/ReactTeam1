import * as React from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { LiveTv as LiveTvIcon, Mail as MailIcon, Menu as MenuIcon, Category as CategoryIcon} from '@mui/icons-material';
import './drawer.css';
import { useParams, useNavigate } from "react-router-dom";

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
//   style={{backgroundColor:'black'}}
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{backgroundColor:'black'}}
    >
      <List>
        {['TV Series'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton >
              <ListItemIcon style={{color:'#fff'}} >
                {index % 2 === 0 ? <LiveTvIcon onClick={() => { navigate(`/tv`) }}/> : <CategoryIcon />}
              </ListItemIcon>
              <ListItemText primary={text} style={{color:'#fff'}} onClick={() => { navigate(`/tv`) }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider style={{borderColor:'#fff'}}/>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
