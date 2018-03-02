import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import moment from 'moment';

// Icons
import DateRangeIcon from 'material-ui-icons/DateRange';

const styles = theme => ({
  paperEvent: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  icons: {
    verticalAlign: 'text-bottom',
  },
});

const FriendlyDate = ({ startDate, endDate }) => {

  const startDateSplit = {
    year: moment(startDate).format('YYYY'),
    month: moment(startDate).format('MM'),
    day: moment(startDate).format('DD'),
    hour: moment(startDate).format('hh'),
    min: moment(startDate).format('mm'),
  };

  const endDateSplit = {
    year: moment(endDate).format('YYYY'),
    month: moment(endDate).format('MM'),
    day: moment(endDate).format('DD'),
    hour: moment(endDate).format('hh'),
    min: moment(endDate).format('mm'),
  };

  const nowDateSplit = {
    year: moment().format('YYYY'),
    month: moment().format('MM'),
    day: moment().format('DD'),
  };

  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);

  let friendlyRangeDate;

  // Same day event, show month day and hour
  if (startDateMoment.format('YYYYMMDD') === endDateMoment.format('YYYYMMDD')) {
    // If current year, no need to add it
    let includeYear = '';
    if (startDateMoment.format('YYYY') !== moment().format('YYYY')) {
      includeYear = 'YYYY';
    }
    if (startDateMoment.format('hhmm') !== endDateMoment.format('hhmm')) {
      friendlyRangeDate = `${startDateMoment.format(`MMMM Do ${includeYear}, h:mm`)} - ${endDateMoment.format('h:mm')}`;
    } else {
      friendlyRangeDate = `${startDateMoment.format(`MMMM Do ${includeYear}`)}`;
    }
  }

  // Month 12th-
  if (startDateSplit.year === endDateSplit.year && startDateSplit.year !== nowDateSplit.year) {
    friendlyRangeDate.startYear = startDateSplit.year;
  }
  return (
    <span>
      {friendlyRangeDate}
    </span>
  );
}

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
                <FriendlyDate startDate={event.startDate} endDate={event.endDate} />
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }
}

FriendlyDate.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouteData(EventList));
