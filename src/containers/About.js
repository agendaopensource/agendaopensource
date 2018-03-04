import React from 'react';
//
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {};

export default withStyles(styles)(() => (
  <div>
    <Typography paragraph variant="headline" component="h1">
      About
    </Typography>
    <Typography type="body1">
      This project was born to act as a glue to different organizations that are currently
      pushing events or meetups.
      Another goal is to link speakers to events and vice versa, by having a curated repository
      of Speakers and a call for papers list.
    </Typography>
    <Typography paragraph type="body1">
      Please support this initiative by adding more events to the current curated list.
    </Typography>
  </div>
));
