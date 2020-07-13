import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    state === true ? setState(false) : setState(true);
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {['About Us', 'Login', 'Laws/Ethics'].map((text, index, {arr= [<PeopleOutlineIcon/>,<VpnKeyIcon/>,<MenuBookIcon/>]}) => (
          <ListItem button key={text}>
            <ListItemIcon>{arr[index]}</ListItemIcon>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />

            {/* Secondary list with further options once logged in */}

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
          {/* <Button 
          onClick={toggleDrawer()}
          >
              Menu Open</Button> */}
              <MenuIcon 
                onClick={toggleDrawer()}
                />
          <SwipeableDrawer
            anchor='left'
            open={state}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
          >
            {list({state})}
          </SwipeableDrawer>
    </div>
  );
}
