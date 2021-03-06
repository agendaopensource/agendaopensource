import React from 'react';
import { Router, withSiteData } from 'react-static';
import Routes from 'react-static-routes';
import PropType from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import 'normalize.css';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import store from './connectors/redux';
import './style';

const fireTracking = () => ReactGA.pageview(window.location.hash);

class App extends React.Component {
  componentDidMount() {
    const { analytics } = this.props;
    ReactGA.initialize(analytics);

    if (window) {
      ReactGA.pageview(window.location.pathname);
    }

    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { googleSearchConsoleToken } = this.props;

    return (
      <Provider store={store}>
        <Router onUpdate={fireTracking}>
          <div className="appContainer">
            <Helmet>
              <title>Open Agenda</title>
              <meta name="description" content="An opensource and curated list of tech events in Portugal" />
              {googleSearchConsoleToken &&
                <meta name="google-site-verification" content={googleSearchConsoleToken} />
              }
            </Helmet>
            <AppBar />
            <div className="container">
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
  googleSearchConsoleToken: PropType.string.isRequired,
  analytics: PropType.string.isRequired,
};

export default hot(module)(withSiteData(App));
