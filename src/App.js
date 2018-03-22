import React from 'react';
import {Router, withSiteData} from 'react-static';
import Routes from 'react-static-routes';
import PropType from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import NavigationAppBar from './components/NavigationAppBar';
import Footer from './components/Footer';
import store from './connectors/redux';

// Custom styles
const styles = theme => ({
  '@global': {
    img: {
      maxWidth: '100%',
    },
    a: {
      textDecoration: 'none',
      color: '#FFFFFF',
    },
  },
  tabs: {
    width: '100%',
  },
  content: {
    padding: '1rem',
    paddingTop: '5rem',
    margin: '0 auto',
    maxWidth: '1280px',
    minHeight: '400px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
});

const fireTracking = () => ReactGA.pageview(window.location.hash);

class App extends React.Component {
  componentDidMount() {
    const { analytics } = this.props;
    ReactGA.initialize(analytics);
    window && ReactGA.pageview(window.location.pathname);

    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <Router onUpdate={fireTracking}>
          <div className={classes.container}>
            <Helmet>
              <title>Open Agenda</title>
            </Helmet>
            <Reboot />
            <NavigationAppBar />
            <div className={classes.content}>
              <Routes />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropType.object.isRequired,
};

const AppWithStyles = withSiteData((withStyles(styles)(App)));

export default hot(module)(AppWithStyles);
