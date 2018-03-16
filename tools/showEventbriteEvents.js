const axios = require('axios');
const dotenv = require('dotenv');
const moment = require('moment');

dotenv.config();

const eventbriteToken = process.env.EVENTBRITE_TOKEN;
const eventbriteOrganizers = process.env.EVENTBRITE_ORGANIZERS.split(',');

const apiUrl = 'https://www.eventbriteapi.com';
const authToken = `token=${eventbriteToken}`;

eventbriteOrganizers.map(async (organizerId) => {
  const eventEndpoint = `${apiUrl}/v3/organizers/${organizerId}/events/`;
  const visibilityAttrs = 'status=live&order_by=start_desc&only_public=on';
  const apiEndpoint = `${eventEndpoint}?${visibilityAttrs}&${authToken}`;
  const { data } = await axios.get(apiEndpoint);

  data.events.map(async (event) => {
    // Venue
    const venueEndpoint = `${apiUrl}/v3/venues/${event.venue_id}/`;
    const { data: venue } = await axios.get(`${venueEndpoint}?${authToken}`);

    const startDate =
      moment(`${event.start.local}`)
        .format('YYYY-MM-DD kk:mm');
    const endDate =
      moment(`${event.end.local}`)
        .format('YYYY-MM-DD kk:mm');
    const eventParsed = {
      '@context': 'http://schema.org',
      '@type': 'Event',
      location: {
        '@type': 'Place',
        name: venue.name,
        address: venue.address.localized_address_display,
        district: venue.address.region,
      },
      name: event.name.text,
      startDate,
      endDate,
      description: event.description.text || '',
      url: event.url,
    };

    process.stdout.write(`${JSON.stringify(eventParsed, null, 4)},\n`);
    return eventParsed;
  });
});
