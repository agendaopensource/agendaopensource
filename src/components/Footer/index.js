import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { Link } from 'react-static';
import Typography from 'material-ui/Typography';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import AppConfig from '../../AppConfig';

const styles = theme => ({
  root: {
    backgroundColor: '#1991bd',
    color: '#ffffff',
  },
  container: {
    margin: '0 auto',
    maxWidth: '1280px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  copywrite: {
    color: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgba(51,51,51,0.08)',
    minHeight: '50px',
  },
  lovetext: {
    fontSize: '1rem',
    paddingTop: theme.spacing.unit * 2,
  },
  love: {
    height: '15px',
    width: '15px',
    verticalAlign: 'text-bottom',
  },
  link: {
    color: '#ffffff',
  }
});

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <div>
      <Grid className={classes.container} container spacing={16}>
        <Grid item sm={6}>
          <Typography variant="title" color="inherit" gutterBottom>
            Open Agenda
          </Typography>
          <Typography color="inherit">
              An open source project to promote and share events and meetups.
          </Typography>
          <Typography color="inherit">
              Please fork the project and help improving it.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="title" gutterBottom color="inherit">
            Links
          </Typography>
          <Typography color="inherit" component="span">
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link
                  to={AppConfig.githubUrl}
                  href={AppConfig.githubUrl}
                  target="_blank"
                  rel="noopener"
                  className={classes.link}
                >
                  GitHub
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link to="/about" href="/about">About</Link>
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </div>
    <div className={classes.copywrite}>
      <Grid className={classes.container} container spacing={16}>
        <Typography color="inherit" className={classes.lovetext}>
            Made with <FavoriteBorderIcon className={classes.love} /> !
        </Typography>
      </Grid>
    </div>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
