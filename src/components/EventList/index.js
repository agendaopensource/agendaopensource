import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData, Link } from 'react-static';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
// Icons
import ScheduleIcon from 'material-ui-icons/Schedule';
import PlaceIcon from 'material-ui-icons/Place';
import FriendlyRangeDate from './FriendlyRangeDate';

const styles = theme => ({
  paperEvent: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  headline: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  link: {
    textDecoration: 'none',
    color: '#039be5',
  },
  timeandplace: {
    marginBottom: theme.spacing.unit * 3,
  },
  icons: {
    verticalAlign: 'text-bottom',
    width: 20,
    height: 20,
  },
  location: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

const googleMapLink = url => `https://www.google.pt/maps/place/${encodeURI(url)}`;

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: props.events,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography paragraph variant="headline" component="h1" className={classes.headline}>
          Upcoming events
        </Typography>
        <Grid container spacing={16}>
          {this.state.events.map(event => (
            <Grid key={event.uniqId} item xs={12}>
              <Paper className={classes.paperEvent}>
                <Typography variant="title" component="h2" paragraph>
                  <Link to={event.url} href={event.url} className={classes.link}>
                    {event.name}
                  </Link>
                </Typography>
                <Typography variant="subheading" className={classes.timeandplace}>
                  <ScheduleIcon className={classes.icons} />
                  { ' ' }
                  <FriendlyRangeDate startDate={event.startDate} endDate={event.endDate} />
                  { event.location && (
                    <span className={classes.location}>
                      <PlaceIcon className={classes.icons} />
                      { ' ' }
                      <Link
                        to={googleMapLink(event.location.address)}
                        href={googleMapLink(event.location.address)}
                        className={classes.link}
                      >
                        { event.location.name }
                      </Link>
                    </span>
                  )}
                </Typography>
                <Typography variant="body1" paragraph gutterBottom>
                  {event.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouteData(EventList));
