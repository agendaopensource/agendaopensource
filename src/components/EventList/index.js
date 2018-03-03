import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
// Icons
import DateRangeIcon from 'material-ui-icons/DateRange';
import FriendlyRangeDate from './FriendlyRangeDate';

const styles = theme => ({
  paperEvent: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  icons: {
    verticalAlign: 'text-bottom',
  },
});

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
      <Grid container spacing={16}>
        {this.state.events.map(event => (
          <Grid key={event.uniqId} item xs={12}>
            <Paper className={classes.paperEvent}>
              <Typography variant="headline" component="h2" paragraph>
                {event.name}
              </Typography>
              <Typography variant="subheading">
                <DateRangeIcon className={classes.icons} />
                <FriendlyRangeDate startDate={event.startDate} endDate={event.endDate} />
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouteData(EventList));
