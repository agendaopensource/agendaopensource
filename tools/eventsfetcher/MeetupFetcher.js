const axios = require('axios');
const moment = require('moment');

async function fetchMeetupEvents(meetupKey, meetupGroups) {
  // Group
  return Promise.all(meetupGroups.map(async (groupName) => {
    const { data: events } = await axios.get(`https://api.meetup.com/${groupName}/events?&sign=true&key=${meetupKey}`);
    // Events
    return events.map((event) => {
      const startDate = moment(`${event.local_date} ${event.local_time}`).format('YYYY-MM-DD kk:mm');
      const endDate = moment(startDate)
        .add(event.duration / 1000, 'second') // If not there, can be assumed 3h
        .format('YYYY-MM-DD kk:mm');
      return {
        '@context': 'http://schema.org',
        '@type': 'Event',
        location: {
          '@type': 'Place',
          name: event.venue.name,
          address: event.venue.address_1,
          district: event.venue.city,
        },
        name: event.name,
        startDate,
        endDate,
        description: event.description.replace(/<[^>]+>/g, ''),
        url: event.link,
      };
    });
  }));
}

module.exports = fetchMeetupEvents;
