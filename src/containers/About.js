import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet>
      <title>Open Agenda | About</title>
    </Helmet>

    <h1>About</h1>
    <p>
      This project was born to act as a glue to different organizations that are currently
      pushing events or meetups.<br />
      Another goal is to link speakers to events and vice versa, by having a curated repository
      of Speakers and a call for papers list.
    </p>
    <p>
      Please support this initiative by adding more events to the current curated list.
    </p>
  </div>
);
