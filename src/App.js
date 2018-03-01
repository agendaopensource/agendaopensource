import React, { PureComponent } from 'react';
import { Router, Link } from 'react-static';
import Routes from 'react-static-routes';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';;
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import MenuAppBar from './components/MenuAppBar';
import store from './connectors/redux'

// Custom styles
const styles = {
  '@global': {
    img: {
      maxWidth: '100%',
    },
  },
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  },
  content: {
    padding: '1rem',
  },
}

class App extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount () {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { classes } = this.props

    return (
      <Provider store={store}>
        <Router>
          <div className={classes.container}>
            <Reboot />
            <MenuAppBar />
            <AppBar className={classes.appBar} color="default" position="static">
              <Toolbar>
                <nav>
                  <Tabs className={classes.tabs} value={false}>
                    <Tab component={Link} to="/" label="Home" />
                    <Tab component={Link} to="/about" label="About" />
                    <Tab component={Link} to="/blog" label="Blog" />
                  </Tabs>
                </nav>
              </Toolbar>
            </AppBar>
            <div className={classes.content}>
              <Routes />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

const AppWithStyles = withStyles(styles)(App);

export default hot(module)(AppWithStyles);
