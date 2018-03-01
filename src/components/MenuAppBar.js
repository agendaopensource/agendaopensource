import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import LibraryBooksIcon from 'material-ui-icons/LibraryBooks';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import EventIcon from 'material-ui-icons/Event';
import FaceIcon from 'material-ui-icons/Face';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#FFFFFF',
  },
  Link: {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const menuLinks = [
      {
        id: 1,
        link: '/call-for-papers',
        label: 'Call for papers',
        icon: LibraryBooksIcon,
      },
      {
        id: 2,
        link: '/call-for-papers',
        label: 'Speakers',
        icon: FaceIcon,
      },
      {
        id: 3,
        link: '/suggest-event',
        label: 'Suggest event',
        icon: EventIcon,
      },
    ];

    const drawer = (
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {menuLinks.map(menuOption => (
              <Link
                key={menuOption.id}
                to={menuOption.link}
                href={menuOption.link}
                className={classes.Link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <menuOption.icon />
                  </ListItemIcon>
                  <ListItemText primary={menuOption.label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    );

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to="/" href="/" className={classes.Link}>
                Open Agenda
              </Link>
            </Typography>
            <Hidden smDown>
              {menuLinks.map(menuOption => (
                <Link
                  key={menuOption.id}
                  to={menuOption.link}
                  href={menuOption.link}
                  className={classes.Link}
                >
                  <Button className={classes.button} color="inherit">
                    <menuOption.icon className={classes.leftIcon} />
                    {menuOption.label}
                  </Button>
                </Link>
              ))}
            </Hidden>
          </Toolbar>
        </AppBar>
        {drawer}
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
