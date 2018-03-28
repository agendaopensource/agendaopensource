import React from 'react';
import Helmet from 'react-helmet';
import EventList from '../components/EventList';

export default () => (
  <div>
    <Helmet>
      <title>Open Agenda | Upcoming events</title>
    </Helmet>
    <EventList />
  </div>
);
