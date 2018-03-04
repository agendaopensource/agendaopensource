import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

const styles = {
  bigtext: {
    fontSize: '1.68rem',
  },
  catchyButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const Speakers = ({ classes }) => (
  <div>
    <Typography paragraph variant="headline" component="h1">
      Speakers
    </Typography>
    <Typography className={classes.bigtext}>
      Have you spoken in a conference recently?
    </Typography>
    <Typography className={classes.bigtext}>
      Share with us the subjects that you like to speak and get ready to
      be selected for the next conference! :)
    </Typography>
    <Typography>
      Open an issue in Github with your Bio, presentations, videos of your talks,
      and everything else that you might consider relevant to be shared on this page.
    </Typography>
  </div>
);

Speakers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Speakers);
