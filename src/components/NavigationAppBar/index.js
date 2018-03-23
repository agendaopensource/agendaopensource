import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-static';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
// Icons
import MenuIcon from 'material-ui-icons/Menu';
//
import NavigationDrawer from './NavigationDrawer';
import { setMenuActive } from '../../connectors/redux/actions/menu';
import { toggleDrawer } from '../../connectors/redux/actions/drawer';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#FFFFFF',
  },
  logo: {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  container: {
    margin: '0 auto',
    maxWidth: '1280px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  appBar: {
    flexWrap: 'wrap',
  },
  button: {
    color: '#FFFFFF',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class NavigationAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
  }

  handleToggleDrawer() {
    const { performToggleDrawer } = this.props;
    performToggleDrawer();
  }

  render() {
    const { classes, menu, activateMenu } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.container}>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to="/" href="/" className={classes.logo}>
                Open Agenda
              </Link>
            </Typography>
            <Hidden smDown implementation="css">
              {menu.map(menuOption => (
                <Button
                  key={menuOption.id}
                  component={Link}
                  to={menuOption.link}
                  target={menuOption.target}
                  rel={menuOption.rel}
                  className={classes.button}
                  onClick={() => activateMenu(menuOption.id)}
                >
                  <menuOption.icon className={classes.leftIcon} />
                  {menuOption.label}
                </Button>
              ))}
            </Hidden>
          </Toolbar>
        </AppBar>
        <NavigationDrawer />
      </div>
    );
  }
}

NavigationAppBar.propTypes = {
  performToggleDrawer: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  activateMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  menu: state.menu,
});

const mapDispatchToProps = {
  activateMenu: setMenuActive,
  performToggleDrawer: toggleDrawer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(NavigationAppBar));
