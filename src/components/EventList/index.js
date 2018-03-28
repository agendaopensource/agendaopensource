import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData, Link } from 'react-static';
import FriendlyRangeDate from './FriendlyRangeDate';
import AppConfig from '../../AppConfig';
import './style';

const googleMapLink = url => `${AppConfig.googleMapsUrl}/${encodeURI(url)}`;

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
        <h1>
          Upcoming events
        </h1>

        {this.state.events.map(event => (
          <div key={event.uniqId} className="card card-1">
            {event.location && event.location.district && (
              <div className="small font-weight-medium text-muted text-uppercase">
                {event.location.district}
              </div>
            )}
            <h1 className="font-weight-normal text-black title">
              <Link to={event.url} href={event.url} target="_blank" rel="noopener">
                {event.name}
              </Link>
            </h1>
            <div>
              <FriendlyRangeDate startDate={event.startDate} endDate={event.endDate} />
              { event.location && (
                <span>
                  { ' @ ' }
                  <Link
                    to={googleMapLink(event.location.address)}
                    href={googleMapLink(event.location.address)}
                    target="_blank"
                    rel="noopener"
                  >
                    { event.location.name }
                  </Link>
                </span>
              )}
            </div>
            <p>
              {event.description}
            </p>
            <div className="action-bar">
              <Link className="button" to={event.url} href={event.url} target="_blank" rel="noopener">Open event website</Link>
              { event.location && (
                <Link
                  to={googleMapLink(event.location.address)}
                  href={googleMapLink(event.location.address)}
                  className="button"
                  target="_blank"
                  rel="noopener"
                >
                  Check Google Maps
                </Link>
            )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default withRouteData(EventList);
