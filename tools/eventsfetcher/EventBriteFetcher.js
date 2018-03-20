const axios = require('axios');
const moment = require('moment');

async function fetchEventbriteEvents(eventbriteToken, eventbriteOrganizers) {
  const eventList = [];
  const apiUrl = 'https://www.eventbriteapi.com';
  const authToken = `token=${eventbriteToken}`;
  // Organizers
  await Promise.all(eventbriteOrganizers.map(async (organizerId) => {
    const eventEndpoint = `${apiUrl}/v3/organizers/${organizerId}/events/`;
    const visibilityAttrs = 'status=live&order_by=start_desc&only_public=on';
    const apiEndpoint = `${eventEndpoint}?${visibilityAttrs}&${authToken}`;
    // Events
    const { data } = await axios.get(apiEndpoint);
    return Promise.all(data.events.map(async (event) => {
      // Venue
      const venueEndpoint = `${apiUrl}/v3/venues/${event.venue_id}/`;
      const { data: venue } = await axios.get(`${venueEndpoint}?${authToken}`);

      const startDate = moment(`${event.start.local}`).format('YYYY-MM-DD kk:mm');
      const endDate = moment(`${event.end.local}`).format('YYYY-MM-DD kk:mm');
      eventList.push({
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
      });
    }));
  }));

  return eventList;
}

module.exports = fetchEventbriteEvents;
