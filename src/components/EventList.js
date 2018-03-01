import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: props.events,
    };
  }

  render() {
    return (
      <div>
        {this.state.events.map(event => (
          <div key={event.uniqId}>{event.name}</div>
        ))}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default withRouteData(EventList);
