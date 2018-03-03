import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// @todo: big refactor on this code!
const FriendlyRangeDate = ({ startDate, endDate }) => {
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
      includeYear = ' YYYY';
    }
    if (startDateMoment.format('hhmm') !== endDateMoment.format('hhmm')) {
      friendlyRangeDate = `${startDateMoment.format(`MMMM Do${includeYear}, h:mm`)} - ${endDateMoment.format('h:mm')}`;
    } else {
      friendlyRangeDate = `${startDateMoment.format(`MMMM Do${includeYear}`)}`;
    }
  } else {
    // If current year, no need to add it
    let includeStartYear = '';
    if (endDateMoment.format('YYYY') !== moment().format('YYYY')) {
      includeStartYear = ', YYYY';
    }
    let includeEndYear = '';
    if (endDateMoment.format('YYYY') !== moment().format('YYYY')) {
      includeEndYear = ', YYYY';
    }
    let includeEndMonth = '';
    if (startDateMoment.format('MM') !== endDateMoment.format('MM')) {
      includeEndMonth = 'MMMM ';
    }

    friendlyRangeDate = `${startDateMoment.format(`MMMM D${includeStartYear}`)}-${endDateMoment.format(`${includeEndMonth}Do${includeEndYear}`)}`;

    //    if (startDateMoment.format('YYYY') !== moment().format('YYYY'))
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
};

FriendlyRangeDate.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default FriendlyRangeDate;
