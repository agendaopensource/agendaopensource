const axios = require('axios');
const dotenv = require('dotenv');
const moment = require('moment');

dotenv.config();

const meetupKey = process.env.MEETUP_KEY;
const meetupGroups = process.env.MEETUP_GROUPS.split(',');

meetupGroups.map(async (groupName) => {
  const { data: events } = await axios.get(`https://api.meetup.com/${groupName}/events?&sign=true&key=${meetupKey}`);
  events.map((event) => {
    const startDate =
      moment(`${event.local_date} ${event.local_time}`)
        .format('YYYY-MM-DD kk:mm');

    const endDate =
      moment(startDate)
        .add(event.duration / 1000, 'second') // If not there, can be assumed 3h
        .format('YYYY-MM-DD kk:mm');

    const eventParsed = {
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

    process.stdout.write(`${JSON.stringify(eventParsed, null, 4)},\n`);
    return eventParsed;
  });
});
