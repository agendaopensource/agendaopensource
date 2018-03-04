import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import { Link } from 'react-static';
import { setMenuActive } from '../../connectors/redux/actions/menu';
import { toggleDrawer } from '../../connectors/redux/actions/drawer';
import MenuItem from 'material-ui';

const styles = {};

class NavigationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
  }
  handleToggleDrawer() {
    const { performToggleDrawer } = this.props;
    performToggleDrawer();
  }

  render() {
    const {
      classes,
      menu,
      activateMenu,
      drawerState,
    } = this.props;

    return (
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={drawerState.open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleToggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {menu.map(menuOption => (
              <ListItem
                button
                key={menuOption.id}
                component={Link}
                to={menuOption.link}
                target={menuOption.target}
                rel={menuOption.rel}
                onClick={() => activateMenu(menuOption.id)}
              >
                <ListItemIcon>
                  <menuOption.icon />
                </ListItemIcon>
                <ListItemText primary={menuOption.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

    );
  }
}

NavigationDrawer.propTypes = {
  drawerState: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  activateMenu: PropTypes.func.isRequired,
  performToggleDrawer: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  menu: state.menu,
  drawerState: state.drawer,
});

const mapDispatchToProps = {
  activateMenu: setMenuActive,
  performToggleDrawer: toggleDrawer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(NavigationDrawer));
