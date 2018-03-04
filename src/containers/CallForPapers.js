import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { withRouteData, Link } from 'react-static';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  cfpEvent: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  bigtext: {
    fontSize: '1.68rem',
  },
  headline: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  link: {
    textDecoration: 'none',
    color: '#039be5',
  },
});

class CallForPapers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequentCfp: props.frequentCallForPapers,
      sporadicCfp: props.sporadicCallForPapers,
    };
  }

  render() {
    const { classes } = this.props;
    const { frequentCfp, sporadicCfp } = this.state;

    return (
      <div>
        <Typography paragraph variant="headline" component="h1">
          Call for Papers
        </Typography>
        <Typography paragraph variant="subheading">
          Do you want to share your talent and knowledge with others?
          Find here ongoing call for papers that you can submit your proposals.
        </Typography>
        <div>
          <Grid container spacing={16}>
            {this.state.sporadicCfp.map(cfp => (
              <Grid key={`${cfp.deadline}${cfp.name}`} item xs={12}>
                <Paper className={classes.cfpEvent}>
                  <Typography variant="title" component="h2" paragraph>
                    <Link
                      to={cfp.url}
                      href={cfp.url}
                      className={classes.link}
                      target="_blank"
                      rel="noopener"
                    >
                      {cfp.name}
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph gutterBottom>
                    {cfp.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
        <Typography variant="headline" component="h4" className={classes.headline}>
          Frequent initiatives:
        </Typography>
        <div>
          <Grid container spacing={16}>
            {this.state.frequentCfp.map(cfp => (
              <Grid key={`${cfp.name}`} item xs={12}>
                <Paper className={classes.cfpEvent}>
                  <Typography variant="title" component="h2" paragraph>
                    <Link
                      to={cfp.url}
                      href={cfp.url}
                      className={classes.link}
                      target="_blank"
                      rel="noopener"
                    >
                      {cfp.name}
                    </Link>
                  </Typography>
                  <Typography variant="body1" paragraph gutterBottom>
                    {cfp.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

CallForPapers.propTypes = {
  classes: PropTypes.object.isRequired,
  frequentCallForPapers: PropTypes.array.isRequired,
  sporadicCallForPapers: PropTypes.array.isRequired,
};

export default withStyles(styles)(withRouteData(CallForPapers));
