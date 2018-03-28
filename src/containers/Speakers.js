import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet>
      <title>Open Agenda | Speakers</title>
    </Helmet>
    <h1>
      Speakers
    </h1>
    <p>Have you spoken in a conference recently?</p>
    <p>
      Share with us the subjects that you like to speak about and get ready to
      be selected for the next conference! <span aria-label="happy face" role="img">🙂</span>
    </p>
    <p>
      Open an issue in Github with your Bio, presentations, videos of your talks,
      and everything else that you might consider relevant to be shared on this page.
    </p>
  </div>
);
