import React from 'react';
import { withSiteData } from 'react-static';
import EventList from '../components/EventList';

export default withSiteData(() => (
  <div>
    <EventList />
  </div>
));
